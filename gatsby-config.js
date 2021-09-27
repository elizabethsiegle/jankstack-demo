require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Jank Stack`,
    description: `Kick off your next, janky Gatsby project with this default jank. This janky bones starter ships with the main Gatsby configuration files you won't want.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    `gatsby-plugin-styled-components`,
    {
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `morty-and-rick-gatsby`,
				short_name: `morty-rick`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-build-newrelic",
      options: {
        NR_INSERT_KEY: process.env.NEW_RELIC_INSERT_KEY || '',
        NR_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY || '',
        NR_ACCOUNT_ID: process.env.NEW_RELIC_ACCOUNT_ID,
        SITE_NAME: 'jankstack',
        customTags: {
          gatsbySite: 'jankstack',
          newFeature: 'remove-jank',
          JANKY_SOURCE_NODES: process.env.JANKY_SOURCE_NODES,
          JANKY_CREATE_PAGE: process.env.JANKY_CREATE_PAGE,
          JANKY_ERRORS: process.env.JANKY_ERRORS,
          HOW_MANY_PAGES: process.env.HOW_MANY_PAGES,
        }
      }
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    }
  ],
}
