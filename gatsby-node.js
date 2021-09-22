const path = require(`path`)

// function checkDuplicates(slug) {
//   nonDuplicates = [];
//   duplicates = [];
//   if (nonDuplicates.includes(slug)) {
//     duplicates.push(slug)
//   } else {
//     nonDuplicates.push(slug)
//   }
// }

// const blogPost = path.resolve(`./src/templates/blog-post.js`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title # used in prev/next
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     throw result.errors
//   }

//   const posts = result.data.allMarkdownRemark.nodes

//   // ** Memory Leak Test Before
//   // posts.forEach(({frontmatter: { slug } }) => {
//   //   checkDuplicates(slug)
//   // })
//   // console.log(`Found duplicates ${JSON.stringify(nonDuplicates)}`)


//   // await Promise.all(posts.forEach(async ({ id, frontmatter: { slug } }, index) => {
//   //   const previous = index === posts.length - 1 ? null : posts[index + 1]
//   //   const next = index === 0 ? null : posts[index - 1]

//   //   createPage({
//   //     path: slug,
//   //     component: blogPost,
//   //     context: {
//   //       id,
//   //       slug,
//   //       previous,
//   //       next,
//   //     },
//   //   })
//   // }))
//   posts.forEach(({ id, frontmatter: { slug } }, index) => {
//     checkDuplicates(slug)
//     const previous = index === posts.length - 1 ? null : posts[index + 1]
//     const next = index === 0 ? null : posts[index - 1]

//     createPage({
//       path: slug,
//       component: blogPost,
//       context: {
//         id,
//         slug,
//         previous,
//         next,
//       },
//     })
//   })
// }

const axios = require('axios')

exports.sourceNodes = async ({actions, createContentDigest}) => {
	const {createNode} = actions

	const integerList = (start, length) =>
		Array.from({length: length}, (v, k) => k + start)

	const rickMortyURL = `https://rickandmortyapi.com/api/character/${integerList(
		1,
		493
	)}`

	const rickMorty = await axios.get(rickMortyURL)

	rickMorty.data.forEach(character => {
		const nodeContent = JSON.stringify(character)
		const nodeMeta = {
			id: character.id.toString(),
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
	})
}

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const CharactersSingle = path.resolve('src/templates/CharactersSingle.js')

	const pages = await graphql(`
		query CharacterPages {
			allCharacters(limit: 493) {
				nodes {
					id
					name
					gender
					status
					species
					image
				}
			}
		}
	`)

	const characters = pages.data.allCharacters.nodes

	for (let i = 0; i < characters.length; i++) {
		const before = i === 0 ? characters.length - 1 : i - 1
		const after = i === characters.length - 1 ? 0 : i + 1

		createPage({
			path: `characters/${characters[i].id}`,
			component: CharactersSingle,
			context: {
				characters: [characters[before], characters[i], characters[after]],
				id: characters[i].id,
				name: characters[i].name,
				image: characters[i].image,
				species: characters[i].species,
				gender: characters[i].gender,
				status: characters[i].status,
			}, // This is to pass data as props to the component.
		})
	}

	// characters.forEach(node => {
	// 	createPage({
	// 		path: `characters/${node.id}`,
	// 		component: CharactersSingle,
	// 		context: {
	// 			id: node.id,
	// 			name: node.name,
	// 			image: node.image,
	// 			species: node.species,
	// 			gender: node.gender,
	// 			status: node.status,
	// 		}, // This is to pass data as props to the component.
	// 	})
	// })
}