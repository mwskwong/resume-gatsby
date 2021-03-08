import { Box, Container, Toolbar } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";
import BgOverlay from "components/BgOverlay";
import DownloadResumeButton from "./DownloadResumeButton";
import SocialMedia from "components/SocialMedia";
import ThemeProvider from "components/ThemeProvider";
import Title from "./Title";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useHomeSx";

const Home = () => {
  const sx = useSx();

  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "home_xs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "home.jpg" }) {
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
      id={nav.home.id}
      Tag="section"
      fluid={images}
    >
      <BgOverlay />
      <Toolbar />
      <ThemeProvider mode="dark">
        <Container sx={sx.container}>
          <Title />
          <SocialMedia sx={sx.socialMedia} />
          <DownloadResumeButton sx={sx.downloadResumeButton} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

Home.whyDidYouRender = true;

export default memo(Home);