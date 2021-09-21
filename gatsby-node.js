const path = require(`path`)

function checkDuplicates(slug) {
  nonDuplicates = [];
  duplicates = [];
  if (nonDuplicates.includes(slug)) {
    duplicates.push(slug)
  } else {
    nonDuplicates.push(slug)
  }
}

const blogPost = path.resolve(`./src/templates/blog-post.js`)

exports.createPages = async ({ graphql, actions }) => {
  console.log(`Gatsby ${typeof process.env.GATSBY_CLOUD}`)
  console.log(`VERCEL ${typeof process.env.VERCEL}`)
  console.log(`Netlify ${typeof process.env.NETLIFY}`)
  const { createPage } = actions

  const result = await graphql(`
    query {
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

  // ** Memory Leak Test Before
  // posts.forEach(({frontmatter: { slug } }) => {
  //   checkDuplicates(slug)
  // })
  // console.log(`Found duplicates ${JSON.stringify(nonDuplicates)}`)


  // await Promise.all(posts.forEach(async ({ id, frontmatter: { slug } }, index) => {
  //   const previous = index === posts.length - 1 ? null : posts[index + 1]
  //   const next = index === 0 ? null : posts[index - 1]

  //   createPage({
  //     path: slug,
  //     component: blogPost,
  //     context: {
  //       id,
  //       slug,
  //       previous,
  //       next,
  //     },
  //   })
  // }))
  posts.forEach(({ id, frontmatter: { slug } }, index) => {
    checkDuplicates(slug)
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
}