import { Box, Container } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { BgImage } from "gbimage-bridge";
import BgOverlay from "components/BgOverlay";
import EndorsementFallback from "./EndorsementFallback";
import { HexagonSlice5 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import { getImage } from "gatsby-plugin-image";
import loadable from "@loadable/component";
import { memo } from "react";
import nav from "contents/nav";
import { useInView } from "react-intersection-observer";
import useSx from "./useTestimonialSx";

const endorsementFallback = <EndorsementFallback />;

const Carousel = loadable(() => import("./Carousel"), {
  fallback: endorsementFallback
});

const Testimonial = () => {
  const sx = useSx();
  const { ref, inView } = useInView({
    rootMargin: "50%",
    triggerOnce: true
  });

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

  const bgs = [
    { ...getImage(bg) },
    {
      media: "(max-width: 600px)",
      ...getImage(bgXs)
    }
  ];

  return (
    <Box
      component={BgImage}
      sx={sx.root}
      id={nav.testimonial.id}
      Tag="section"
      image={bgs}
    >
      <BgOverlay sx={sx.bgOverlay}>
        <ThemeProvider mode="dark">
          <Container>
            <SectionHeader
              heading={constants.whatPeopleSay}
              Icon={HexagonSlice5}
            />
            <Box ref={ref}>
              {inView ? <Carousel /> : endorsementFallback}
            </Box>
          </Container>
        </ThemeProvider>
      </BgOverlay>
    </Box>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);