import { Box, Container, useTheme } from "@material-ui/core";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Bg from "components/Bg";
import Carousel from "./Carousel";
import { HexagonSlice5 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useTestimonialSx";

const Testimonial = () => {
  const theme = useTheme();
  const sx = useSx();

  const { bg, bgXs } = useStaticQuery(graphql`
    query {     
      bg: file(relativePath: { eq: "testimonial.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      bgXs: file(relativePath: { eq: "testimonial_xs.jpg" }) {
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
      media: `(max-width: ${theme.breakpoints.values.xs}px)`,
      image: getImage(bgXs)
    }
  ]);

  return (
    <Box component="section" sx={sx.root} id={nav.testimonial.id}>
      <Bg image={bgs} backgroundColor="#818fa0" sx={sx.bg}>
        <ThemeProvider mode="dark">
          <Container>
            <SectionHeader
              heading={constants.whatPeopleSay}
              Icon={HexagonSlice5}
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