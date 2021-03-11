import { Box, Container } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import BgOverlay from "components/BgOverlay";
import EndorsementFallback from "./EndorsementFallback";
import { HexagonSlice5 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
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

  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "testimonial_xs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "testimonial.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const images = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: "(min-width: 421px)"
    }
  ];

  return (
    <Box
      component={BackgroundImage}
      sx={sx.root}
      id={nav.testimonial.id}
      Tag="section"
      fluid={images}
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