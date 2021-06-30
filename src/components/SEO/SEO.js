import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { getSrc } from "gatsby-plugin-image";
import { memo } from "react";

const SEO = ({ title: titleProp, description: descriptionProp, meta: metaProp = [] }) => {
  const { site, ogImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          shortTitle
          description
          themeColor
          siteUrl
        }
      }
      ogImage: file(relativePath: {eq: "ogImage.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  ` );

  const title = titleProp || site.siteMetadata?.title;
  const titleTemplate = titleProp ? `%s | ${site.siteMetadata?.shortTitle}` : null;
  const description = descriptionProp || site.siteMetadata?.description;
  const htmlAttributes = { lang: "en" };
  const ogImageSrc = getSrc(ogImage);
  const meta = [
    {
      name: "description",
      content: description
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:description",
      content: description
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: site.siteMetadata.siteUrl
    },
    {
      property: "og:image",
      content: `${site.siteMetadata.siteUrl}${ogImageSrc}`
    },
    {
      property: "apple-mobile-web-app-capable",
      content: "yes"
    },
    {
      property: "apple-mobile-web-app-status-bar-style",
      content: "default"
    },
    ...metaProp
  ];

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      htmlAttributes={htmlAttributes}
      meta={meta}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
};

SEO.whyDidYouRender = true;

export default memo(SEO);