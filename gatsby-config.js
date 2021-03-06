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
        fonts: `${__dirname}/src/fonts`,
        images: `${__dirname}/src/images`,
        pages: `${__dirname}/src/pages`,
        reducers: `${__dirname}/src/reducers`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "src",
    //     path: `${__dirname}/src`
    //   },
    //   __key: "src"
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      },
      __key: "images"
    }
  ]
};
