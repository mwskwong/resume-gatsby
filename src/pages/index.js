import About from "sections/index/About";
import { Box } from "@material-ui/core";
import Contact from "sections/index/Contact";
import Education from "sections/index/Education";
import Footer from "sections/index/Footer";
import FunFact from "sections/index/FunFact";
import Home from "sections/index/Home";
import LazyHydrate from "react-lazy-hydration";
import NavBar from "components/NavBar";
import Project from "sections/index/Project";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "sections/index/Testimonial";
import Work from "sections/index/Work";

const Index = () => {
  const contactHydrate = "click";
  const sectionHydrate = { rootMargin: "0px" };

  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <LazyHydrate whenVisible={sectionHydrate}>
        <About />
      </LazyHydrate>
      <LazyHydrate whenVisible={sectionHydrate}>
        <FunFact />
      </LazyHydrate>
      <LazyHydrate whenVisible={sectionHydrate}>
        <Education />
      </LazyHydrate>
      <LazyHydrate whenVisible={sectionHydrate}>
        <Work />
      </LazyHydrate>
      <LazyHydrate whenVisible={sectionHydrate}>
        <Project />
      </LazyHydrate>
      <LazyHydrate whenVisible={sectionHydrate}>
        <Testimonial />
      </LazyHydrate>
      <LazyHydrate on={contactHydrate}>
        <Contact />
      </LazyHydrate>
      <LazyHydrate ssrOnly>
        <Footer />
      </LazyHydrate>
      <ScrollToTopFab />
    </Box >
  );
};

Index.whyDidYouRender = true;

export default Index;
