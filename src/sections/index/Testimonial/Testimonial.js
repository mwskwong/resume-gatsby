import { Box, Container, useTheme } from "@mui/material";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Bg from "components/Bg";
import Carousel from "./Carousel";
import HexSlice5 from "components/icons/HexSlice5";
import SectionHeader from "components/SectionHeader";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useTestimonialSx";

const Testimonial = () => {
  const theme = useTheme();
  const sx = useSx();

  const { bgXs, bgMd, bgLg, bgXl } = useStaticQuery(graphql`
    query {
      bgXs: file(relativePath: {eq: "testimonial.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.5625)
        }
      }
      bgMd: file(relativePath: {eq: "testimonial.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.75)
        }
      }
      bgLg: file(relativePath: {eq: "testimonial.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.25)
        }
      }
      bgXl: file(relativePath: {eq: "testimonial.jpg"}) {
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
    <Box component="section" sx={sx.root} id={nav.testimonial.id}>
      <Bg image={bgs} backgroundColor="#818fa0" sx={sx.bg}>
        <ThemeProvider mode="dark">
          <Container>
            <SectionHeader
              heading={constants.whatPeopleSay}
              Icon={HexSlice5}
            />
            <Carousel />
          </Container>
        </ThemeProvider>
      </Bg>
    </Box>
  );
};

Testimonial.whyDidYouRender = true;

export default memo(Testimonial);