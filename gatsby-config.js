const { BRANCH = "main" } = process.env;
const siteUrl = BRANCH === "main"
  ? "https://mwskwong.com"
  : `https://${BRANCH}.mwskwong.com`;

module.exports = {
  siteMetadata: {
    description: "Matthew's Personal Resume Website",
    shortTitle: "Matthew Kwong",
    siteUrl,
    themeColor: "#ffffff",
    title: "Matthew Kwong - System DBA & Front-End Developer"
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true
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
        sections: `${__dirname}/src/sections`,
        selectors: `${__dirname}/src/selectors`,
        slices: `${__dirname}/src/slices`,
        src: `${__dirname}/src`,
        store: `${__dirname}/src/store`,
        styles: `${__dirname}/src/styles`,
        utils: `${__dirname}/src/utils`
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allFile(filter: {extension: {eq: "pdf"}}) {
              edges {
                node {
                  publicURL
                }
              }
            }
          }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allFile: { edges: allPDFs }
        }) => {
          return [
            ...allPages,
            ...(allPDFs.map(({ node: { publicURL } }) => ({ path: publicURL })))
          ];
        }
      }
    },
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
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
          breakpoints: [900, 1200, 1536]
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documents",
        path: `${__dirname}/src/documents`
      }
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
        resolveEnv: () => BRANCH,
        env: {
          main: {
            policy: [{ userAgent: "*", allow: "/" }]
          },
          next: {
            policy: [{ userAgent: "*", disallow: "/" }]
          }
        }
      }
    }
  ]
};