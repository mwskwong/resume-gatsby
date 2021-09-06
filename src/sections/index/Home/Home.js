import { Box, Container, Toolbar, useTheme } from "@mui/material";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Bg from "components/Bg";
import DownloadResumeButton from "./DownloadResumeButton";
import SocialMedia from "components/SocialMedia";
import ThemeProvider from "components/ThemeProvider";
import Title from "./Title";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useHomeSx";

const Home = () => {
  const theme = useTheme();
  const sx = useSx();
  const { bgXs, bgMd, bgLg, bgXl } = useStaticQuery(graphql`
    query {
      bgXs: file(relativePath: {eq: "home.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.5625)
        }
      }
      bgMd: file(relativePath: {eq: "home.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.75)
        }
      }
      bgLg: file(relativePath: {eq: "home.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.25)
        }
      }
      bgXl: file(relativePath: {eq: "home.jpg"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const bgs = withArtDirection(getImage(bgXl), [
    {
      media: `(max-width: ${theme.breakpoints.values.sm}px)`,
      image: getImage(bgXs)
    },
    {
      media: `(max-width: ${theme.breakpoints.values.lg}px)`,
      image: getImage(bgMd)
    },
    {
      media: `(max-width: ${theme.breakpoints.values.xl}px)`,
      image: getImage(bgLg)
    }
  ]);

  return (
    <Box component="section" sx={sx.root} id={nav.home.id}>
      <Bg image={bgs} backgroundColor="#afb8c6" sx={sx.bg}>
        <Toolbar />
        <ThemeProvider mode="dark">
          <Container sx={sx.container}>
            <Title />
            <SocialMedia sx={sx.socialMedia} />
            <DownloadResumeButton sx={sx.downloadResumeButton} />
          </Container>
        </ThemeProvider>
      </Bg>
    </Box>
  );
};

Home.whyDidYouRender = true;

export default memo(Home);