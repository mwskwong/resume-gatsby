import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import data from "contents/data";
import useSx from "./useCompanyLogoSx";

const CompanyLogo = ({ company }) => {
  const sx = useSx();
  const { images: { edges: images } } = useStaticQuery(graphql`
    query {
      images: allFile(filter: {
        sourceInstanceName: {eq: "images"}, 
        relativeDirectory: {eq: "companies"}
      }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                layout: FIXED
                transformOptions: {grayscale: true}
                height: 100
              )
            }
          }
        }
      }
    }
  `);

  const { name, href, image: imagePath } = data.work.company[company] || {};
  const imageData = images.find(({ node: { relativePath } }) => imagePath === relativePath);
  const image = getImage(imageData.node);

  return (
    <Box sx={sx.root}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <GatsbyImage
          image={image}
          alt={name}
        />
      </a>
    </Box>
  );
};

CompanyLogo.propTypes = {
  company: PropTypes.oneOf(Object.keys(data.work.company)).isRequired
};

CompanyLogo.whyDidYouRender = true;

export default CompanyLogo;