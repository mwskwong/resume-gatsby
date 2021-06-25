import { Box, Container, Toolbar, useTheme } from "@material-ui/core";
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
  const { bg, bgXs } = useStaticQuery(graphql`
    query {     
      bg: file(relativePath: { eq: "home.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      bgXs: file(relativePath: { eq: "home_xs.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [240, 320, 420]
          )
        }
      }
    }
  `);

  const bgs = withArtDirection(getImage(bg), [
    {
      media: `(max-width: ${theme.breakpoints.values.sm}px)`,
      image: getImage(bgXs)
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