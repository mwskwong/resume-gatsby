import { Box, Container, Toolbar } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import { BgImage } from "gbimage-bridge";
import BgOverlay from "components/BgOverlay";
import DownloadResumeButton from "./DownloadResumeButton";
import SocialMedia from "components/SocialMedia";
import ThemeProvider from "components/ThemeProvider";
import Title from "./Title";
import { getImage } from "gatsby-plugin-image";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useHomeSx";

const Home = () => {
  const sx = useSx();
  const { bg, bgXs } = useStaticQuery(graphql`
    query {     
      bg: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF],
            breakpoints: [960, 1280, 2000]
          )
        }
      }
      bgXs: file(relativePath: { eq: "home_xs.jpg" }) {
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
    <Box component={BgImage} sx={sx.root} id={nav.home.id} Tag="section" image={bgs}>
      <BgOverlay>
        <Toolbar />
        <ThemeProvider mode="dark">
          <Container sx={sx.container}>
            <Title />
            <SocialMedia sx={sx.socialMedia} />
            <DownloadResumeButton sx={sx.downloadResumeButton} />
          </Container>
        </ThemeProvider>
      </BgOverlay>
    </Box>
  );
};

Home.whyDidYouRender = true;

export default memo(Home);