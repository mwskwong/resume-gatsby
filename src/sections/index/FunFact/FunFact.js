import { Box, Container, Grid } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import { memo, useMemo } from "react";

import BackgroundImage from "gatsby-background-image";
import BgOverlay from "components/BgOverlay";
import FactCard from "./FactCard";
import Gift from "components/icons/Gift";
import Globe from "components/icons/Globe";
import Heart from "components/icons/Heart";
import HotCup from "components/icons/HotCup";
import ThemeProvider from "components/ThemeProvider";
import constants from "contents/constants";
import data from "contents/data";
import { useInView } from "react-intersection-observer";
import useSx from "./useFunFactSx";

const FunFact = () => {
  const sx = useSx();
  const [ref, inView] = useInView({ triggerOnce: true });

  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "fun_fact_xs.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(relativePath: { eq: "fun_fact.jpg" }) {
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

  const content = useMemo(() => (
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
  ), [inView, ref]);

  return (
    <Box
      component={BackgroundImage}
      sx={sx.root}
      Tag="section"
      fluid={images}
    >
      <BgOverlay />
      {content}
    </Box>
  );
};

FunFact.whyDidYouRender = true;

export default memo(FunFact);