const path = require(`path`)
const { v4: uuidv4 } = require("uuid")

const JANKY_SOURCE_NODES = process.env.JANKY_SOURCE_NODES
const JANKY_CREATE_PAGE = process.env.JANKY_CREATE_PAGE
const JANKY_ERRORS = process.env.JANKY_ERRORS
const limit = JANKY_SOURCE_NODES ? 10000 : 40
const blogPost = path.resolve(`./src/templates/blog-post.js`)

const axios = require("axios")

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const { createNode } = actions

  const integerList = (start, length) =>
    Array.from({ length: length }, (v, k) => k + start)

  const rickMortyURL = `https://rickandmortyapi.com/api/character/${integerList(
    1,
    493
  )}`

  const rickMorty = await axios.get(rickMortyURL)
  console.log(`rickMorty ${rickMorty.data.length}`)
  const data = [
    ...rickMorty.data,
    ...rickMorty.data,
    ...rickMorty.data,
    ...rickMorty.data,
  ]
  let id = 0
  data.forEach(character => {
    const nodeContent = JSON.stringify(character)
    const nodeMeta = {
      id: JSON.stringify(id),
      parent: null,
      children: [],
      internal: {
        type: `Characters`,
        content: nodeContent,
        contentDigest: createContentDigest(character),
      },
    }
    const node = Object.assign({}, character, nodeMeta)
    createNode(node)
    id += 1
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CharactersSingle = path.resolve("src/templates/CharactersSingle.js")

  const result = await graphql(`
    query {
      allCharacters {
        nodes {
          id
          name
          gender
          status
          species
          image
        }
      }

      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            title # used in prev/next
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.nodes
  const characters = result.data.allCharacters.nodes
  if (JANKY_CREATE_PAGE === 'true') {
    posts.forEach(({ id, frontmatter: { slug } }, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]

      createPage({
        path: slug,
        component: blogPost,
        context: {
          id,
          slug,
          previous,
          next,
        },
      })
    })
    characters.forEach(node => {
			if (node.name.length >= 10) {
				JANKY_ERRORS === 'true' && console.error(`Error: this page is not as janky as it could be, please unfix`)
			}

	

      createPage({
        path: `characters/${node.id}`,
        component: CharactersSingle,
        context: {
          id: node.id,
          name: node.name,
          image: node.image,
          species: node.species,
          gender: node.gender,
          status: node.status,
					limit,
        }, // This is to pass data as props to the component.
      })
    })
  } else {
    await Promise.all(
      posts.map(async ({ id, frontmatter: { slug } }, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1]
        const next = index === 0 ? null : posts[index - 1]

        createPage({
          path: slug,
          component: blogPost,
          context: {
            id,
            slug,
            previous,
            next,
          },
        })
      })
    )

    await Promise.all(
      characters.map(async node => {
        createPage({
          path: `characters/${node.id}`,
          component: CharactersSingle,
          context: {
            id: node.id,
            name: node.name,
            image: node.image,
            species: node.species,
            gender: node.gender,
            status: node.status,
						limit,
          }, // This is to pass data as props to the component.
        })
      })
    )
  }
}
