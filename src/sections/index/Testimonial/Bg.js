import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@material-ui/core";
import useSx from "./useBgSx";

const Bg = () => {
  const sx = useSx();
  const { bg, bgXs } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: {eq: "testimonial.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            breakpoints: [600, 960, 1280, 2000]
          )
        }
      }
      bgXs: file(relativePath: {eq: "testimonial_xs.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            breakpoints: [120, 160, 240, 320, 420]
          )
        }
      }
    }
  `);

  const images = withArtDirection(getImage(bg), [
    {
      media: "(max-width: 420px)",
      image: getImage(bgXs)
    }
  ]);

  return (
    <Box
      component={GatsbyImage}
      sx={sx.root}
      aria-hidden
      image={images}
      alt="fun fact bg"
      backgroundColor="#818fa0"
    />
  );
};

Bg.whyDiDYouRender = true;

export default Bg;