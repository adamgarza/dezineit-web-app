module.exports = {
  siteMetadata: {
    title: `Dezine It!`,
    siteUrl: `https://www.dezine-it.com/`,
    description: `Dezine It! Custom Screen Print. Custom apparel with custom design ideas, screen print or embroidered daily for everyday needs. Call us today @ 219-805-6534.`,
    keyords: `custom screen print, tees, hoodies, pants, custom apparel, custom design, embroidered`,
    author: `The Creative Few | http://thecreativefew.com | agarza@thecreativefew.com`,
    owner: `DezineIt! LLC.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vzn9qbq6yjd2`,
        accessToken: `aqqsjttDdfYHaDHGPgGBqkNCVIrS8KFYz_hR6Tr6U2Y`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dezineit-default`,
        short_name: `dezineit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/dezineit-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Shadows Into Light Two`,
          `cursive\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
