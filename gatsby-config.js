module.exports = {
  siteMetadata: {
    description: "Matthew's Personal Resume Website",
    shortTitle: "Matthew Kwong",
    siteUrl: "https://mwskwong.com",
    themeColor: "#ffffff",
    title: "Matthew Kwong - System DBA & Front-End Developer"
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
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
        src: `${__dirname}/src`,
        store: `${__dirname}/src/store`,
        styles: `${__dirname}/src/styles`,
        utils: `${__dirname}/src/utils`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#fbfbfc",
        cache_busting_mode: "none",
        categories: ["resume", "personalization"],
        description: "Matthew's Personal Resume Website",
        display: "standalone",
        icon: "src/images/icon.png",
        lang: "en",
        name: "Matthew's Resume",
        short_name: "Matthew",
        start_url: ".",
        theme_color: "#ffffff"
      }
    },
    {
      options: {
        workboxConfig: {
          globPatterns: ["**/icon-*"]
        }
      },
      resolve: "gatsby-plugin-offline"
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      __key: "images",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      __key: "documents",
      options: {
        name: "documents",
        path: `${__dirname}/src/documents`
      }
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-robots-txt"
  ]
};