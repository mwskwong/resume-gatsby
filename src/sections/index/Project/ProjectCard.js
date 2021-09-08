import { Card, CardContent, Typography } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import PropTypes from "prop-types";
import useSx from "./useProjectCardSx";

const ProjectCard = ({ project: {
  date,
  description,
  image: imagePath,
  title
} }) => {
  const sx = useSx();
  const { images: { edges: images } } = useStaticQuery(graphql`
    {
      images: allFile(
        filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "projects"}}
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(height: 222)
            }
          }
        }
      }
    }
  `);

  const imageData = images.find(({ node: { relativePath } }) => imagePath === relativePath);
  const image = getImage(imageData.node);

  return (
    <Card sx={sx.card} variant="outlined">
      <GatsbyImage
        style={sx.cardMedia}
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
  project: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

ProjectCard.whyDidYouRender = true;

export default ProjectCard;