import { Box, Container, Grid, useTheme } from "@material-ui/core";
import { getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Bg from "components/Bg";
import FactCard from "./FactCard";
import Gift from "components/icons/Gift";
import Globe from "components/icons/Globe";
import Heart from "components/icons/Heart";
import HotCup from "components/icons/HotCup";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import data from "contents/data";
import { memo } from "react";
import useSx from "./useFunFactSx";

const FunFact = () => {
  const sx = useSx();
  const theme = useTheme();
  const { bg, bgXs } = useStaticQuery(graphql`
    query {     
      bg: file(relativePath: { eq: "fun_fact.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      bgXs: file(relativePath: { eq: "fun_fact_xs.jpg" }) {
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
    <Box component="section" sx={sx.root}>
      <Bg image={bgs} backgroundColor="#7d90a4" sx={sx.bg}>
        <ThemeProvider mode="dark">
          <Container>
            <Grid container spacing={4}>
              <Grid item md={3} sm={6} xs={12}>
                <FactCard
                  Icon={Globe}
                  title={constants.completedCourses}
                  value={data.funFact.completedCourses}
                />
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <FactCard
                  Icon={Gift}
                  title={constants.completedProjects}
                  value={data.funFact.completedProjects}
                />
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <FactCard
                  Icon={Heart}
                  title={constants.happySupervisors}
                  value={data.funFact.happySupervisors}
                />
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <FactCard
                  Icon={HotCup}
                  title={constants.commitment}
                  value={data.funFact.commitment}
                />
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Bg>
    </Box>
  );
};

FunFact.whyDidYouRender = true;

export default memo(FunFact);