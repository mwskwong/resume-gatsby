import { Box, Container, Grid, useTheme } from "@mui/material";
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
  const { bgXs, bgMd, bgLg, bgXl } = useStaticQuery(graphql`
    query {
      bgXs: file(relativePath: {eq: "fun_fact.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.5625)
        }
      }
      bgMd: file(relativePath: {eq: "fun_fact.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 0.75)
        }
      }
      bgLg: file(relativePath: {eq: "fun_fact.jpg"}) {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.25)
        }
      }
      bgXl: file(relativePath: {eq: "fun_fact.jpg"}) {
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