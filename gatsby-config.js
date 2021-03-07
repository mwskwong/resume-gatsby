module.exports = {
  siteMetadata: {
    title: "Matthew Kwong - System DBA & Front-End Developer",
    shortTitle: "Matthew Kwong",
    themeColor: "#ffffff",
    description: "Matthew's Personal Resume Website",
    siteUrl: "https://mwskwong.com"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: `${__dirname}/src`,
        actions: `${__dirname}/src/actions`,
        components: `${__dirname}/src/components`,
        contents: `${__dirname}/src/contents`,
        documents: `${__dirname}/src/documents`,
        fonts: `${__dirname}/src/fonts`,
        hooks: `${__dirname}/src/hooks`,
        images: `${__dirname}/src/images`,
        pages: `${__dirname}/src/pages`,
        reducers: `${__dirname}/src/reducers`,
        sections: `${__dirname}/src/sections`,
        selectors: `${__dirname}/src/selectors`,
        utils: `${__dirname}/src/utils`,
        store: `${__dirname}/src/store`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-background-image",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Matthew's Resume",
        short_name: "Matthew",
        icon: "src/images/icon.png",
        start_url: ".",
        theme_color: "#ffffff",
        background_color: "#fbfbfc",
        categories: [
          "resume",
          "personalization"
        ],
        description: "Matthew's Personal Resume Website",
        display: "standalone",
        lang: "en"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      },
      __key: "images"
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-loadable-components-ssr"
  ]
};