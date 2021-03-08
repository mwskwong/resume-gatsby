import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import PropTypes from "prop-types";
import data from "contents/data";
import useSx from "./useProjectCardSx";

const ProjectCard = ({ project }) => {
  const sx = useSx();
  const { images: { edges: images } } = useStaticQuery(graphql`
    query {
      images: allFile(filter: {
        sourceInstanceName: {eq: "images"}, 
        relativeDirectory: {eq: "projects"}
      }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const { date, description, image: imagePath, title } = data.project[project] || {};
  const imageData = images.find(({ node: { relativePath } }) => imagePath === relativePath);
  const image = getImage(imageData.node);

  return (
    <Card sx={sx.card} elevation={0}>
      <Box
        component={GatsbyImage}
        sx={sx.cardMedia}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography sx={sx.title} variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography sx={sx.date} gutterBottom>
          {date}
        </Typography>
        <Typography sx={sx.description}>
          {description}
        </Typography>
      </CardContent>
    </Card >
  );
};

ProjectCard.propTypes = {
  project: PropTypes.oneOf(Object.keys(data.project)).isRequired
};

ProjectCard.whyDidYouRender = true;

export default ProjectCard;