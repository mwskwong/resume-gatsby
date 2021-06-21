import { Suspense, lazy } from "react";

import { Box } from "@material-ui/core";
import Home from "sections/index/Home";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const About = lazy(() => import("sections/index/About"));
const Contact = lazy(() => import("sections/index/Contact"));
const Education = lazy(() => import("sections/index/Education"));
const Footer = lazy(() => import("sections/index/Footer"));
const FunFact = lazy(() => import("sections/index/FunFact"));
const Project = lazy(() => import("sections/index/Project"));
const Testimonial = lazy(() => import("sections/index/Testimonial"));
const Work = lazy(() => import("sections/index/Work"));


const Index = () => {

  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <Suspense fallback={null}>
        <About />
      </Suspense>
      <Suspense fallback={null}>
        <FunFact />
      </Suspense>
      <Suspense fallback={null}>
        <Education />
      </Suspense>
      <Suspense fallback={null}>
        <Work />
      </Suspense>
      <Suspense fallback={null}>
        <Project />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {/* <Suspense fallback={null}>
        <Home />
        <About />
        <FunFact />
        <Education />
        <Work />
        <Project />
        <Testimonial />
        <Contact />
        <Footer />
      </Suspense> */}
      <ScrollToTopFab />
    </Box >
  );
};

Index.whyDidYouRender = true;

export default Index;
