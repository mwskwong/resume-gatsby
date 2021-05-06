import { Box, Container } from "@material-ui/core";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Bg from "components/Bg";
import BgOverlay from "components/BgOverlay";
import { HexagonSlice5 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import loadable from "@loadable/component";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useTestimonialSx";

const Carousel = loadable(() => import("./Carousel"));

const Testimonial = () => {
  const sx = useSx();

  const { bg, bgXs } = useStaticQuery(graphql`
    query {     
      bg: file(relativePath: { eq: "testimonial.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF],
            breakpoints: [960, 1280, 2000]
          )
        }
      }
      bgXs: file(relativePath: { eq: "testimonial_xs.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF],
            breakpoints: [120, 160, 240, 320, 420]
          )
        }
      }
    }
  `);

  const bgs = withArtDirection(getImage(bg), [
    {
      media: "(max-width: 600px)",
      image: getImage(bgXs)
    }
  ]);

  return (
    <Box component="section" sx={sx.root} id={nav.testimonial.id}>
      <Bg image={bgs} />
      <BgOverlay sx={sx.bgOverlay}>
        <ThemeProvider mode="dark">
          <Container>
            <SectionHeader
              heading={constants.whatPeopleSay}
              Icon={HexagonSlice5}
            />
            <Carousel />
          </Container>
        </ThemeProvider>
      </BgOverlay>
    </Box>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);