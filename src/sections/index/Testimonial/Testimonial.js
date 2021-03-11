import { Box, Container } from "@material-ui/core";

import Bg from "./Bg";
import BgOverlay from "components/BgOverlay";
import EndorsementFallback from "./EndorsementFallback";
import { HexagonSlice5 } from "mdi-material-ui";
import { ParallaxBanner } from "react-scroll-parallax";
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

  const layers = [{ children: <Bg />, amount: .5 }];

  return (
    <Box component="section" sx={sx.root} id={nav.testimonial.id} Tag="section">
      <ParallaxBanner layers={layers}>
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
      </ParallaxBanner>
    </Box>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);