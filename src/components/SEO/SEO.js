import { graphql, useStaticQuery } from "gatsby";

import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { memo } from "react";

const SEO = ({ title: titleProp, description: descriptionProp, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
    query SEOQuery {
      site {
        siteMetadata {
          title
          shortTitle
          description
          themeColor
          siteUrl
        }
      }
    }
  ` );

  const title = titleProp || site.siteMetadata?.title;
  const description = descriptionProp || site.siteMetadata?.description;
  const htmlAttributes = { lang: "en" };

  return (
    <Helmet
      title={title}
      titleTemplate={titleProp ? `%s | ${site.siteMetadata?.shortTitle}` : null}
      htmlAttributes={htmlAttributes}
      meta={[
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
          content: site.siteMetadata?.siteUrl
        },
        {
          property: "og:image",
          content: `${site.siteMetadata?.siteUrl}/thumbnail.jpg`
        },
        ...meta
      ]}
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