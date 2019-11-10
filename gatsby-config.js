/**
import path from './.cache/normalize-page-path';
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Portfolio`,
    author: `Hamdi Lachaal`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pboomtn814bo`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Droid Sans",
            "Droid Serif",
            "Gochi Hand",
            "Work Sans",
            "Oxygen",
            "Roboto",
            "Ubuntu",
            "B612",
            "Muli",
          ],
        },
      },
    },
  ],
}
