require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    flags: { PRESERVE_WEBPACK_CACHE: true },
    siteMetadata: {
        title: `The Boneyard Espresso`,
        description: `Homepage of The Boneyard Espresso and Collective`,
        author: `Declan Quinn`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: "gatsby-omni-font-loader",
            options: {

                mode: "async",
                enableListener: true,

                /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
                custom: [
                    {
                        /* Exact name of the font as defied in @font-face CSS rule */
                        name: ["Oswald, Bebas, Playfair, Felix, Facebook, Instagram"],
                        /* Path to the font CSS file inside the "static" folder with @font-face definition */
                        file: "/fonts/fonts.css",
                    },
                ],
            },
        }
    ],
}
