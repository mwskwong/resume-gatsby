import { Box, Container, Grid } from "@material-ui/core";

import Bg from "./Bg";
import BgOverlay from "components/BgOverlay";
import FactCard from "./FactCard";
import Gift from "components/icons/Gift";
import Globe from "components/icons/Globe";
import Heart from "components/icons/Heart";
import HotCup from "components/icons/HotCup";
import { ParallaxBanner } from "react-scroll-parallax";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import data from "contents/data";
import { memo } from "react";
import { useInView } from "react-intersection-observer";
import useSx from "./useFunFactSx";

const FunFact = () => {
  const sx = useSx();
  const [ref, inView] = useInView({ triggerOnce: true });

  const layers = [{ children: <Bg />, amount: .5 }];

  return (
    <Box component="section" sx={sx.root}>
      <ParallaxBanner layers={layers}>
        <BgOverlay sx={sx.bgOverlay}>
          <ThemeProvider mode="dark">
            <Container ref={ref}>
              <Grid container spacing={4}>
                <Grid item md={3} sm={6} xs={12}>
                  <FactCard
                    Icon={Globe}
                    title={constants.completedCourses}
                    value={data.funFact.completedCourses}
                    startCountUp={inView}
                  />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <FactCard
                    Icon={Gift}
                    title={constants.completedProjects}
                    value={data.funFact.completedProjects}
                    startCountUp={inView}
                  />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <FactCard
                    Icon={Heart}
                    title={constants.happySupervisors}
                    value={data.funFact.happySupervisors}
                    startCountUp={inView}
                  />
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <FactCard
                    Icon={HotCup}
                    title={constants.commitment}
                    value={data.funFact.commitment}
                    startCountUp={inView}
                  />
                </Grid>
              </Grid>
            </Container>
          </ThemeProvider>
        </BgOverlay>
      </ParallaxBanner>

    </Box >
  );
};

FunFact.whyDidYouRender = true;

export default memo(FunFact);