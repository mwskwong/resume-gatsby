import { Box, Container, Toolbar } from "@material-ui/core";

import Bg from "./Bg";
import BgOverlay from "components/BgOverlay";
import DownloadResumeButton from "./DownloadResumeButton";
import { ParallaxBanner } from "react-scroll-parallax";
import SocialMedia from "components/SocialMedia";
import ThemeProvider from "components/ThemeProvider";
import Title from "./Title";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useHomeSx";

const Home = () => {
  const sx = useSx();

  const layers = [{ children: <Bg />, amount: .5 }];

  return (
    <Box component="section" sx={sx.root} id={nav.home.id}>
      <ParallaxBanner layers={layers}>
        <BgOverlay sx={sx.bgOverlay}>
          <Toolbar />
          <ThemeProvider mode="dark">
            <Container sx={sx.container}>
              <Title />
              <SocialMedia sx={sx.socialMedia} />
              <DownloadResumeButton sx={sx.downloadResumeButton} />
            </Container>
          </ThemeProvider>
        </BgOverlay>
      </ParallaxBanner>
    </Box>
  );
};

Home.whyDidYouRender = true;

export default memo(Home);