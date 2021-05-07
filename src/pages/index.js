import {
  Contact,
  Education,
  Footer,
  FunFact,
  Home,
  Project,
  Testimonial,
  Work
} from "sections/index";

import About from "sections/index/About";
import { Box } from "@material-ui/core";
import LazyHydrate from "react-lazy-hydration";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const Index = () => {
  const contactHydrate = ["touchstart", "mouseover", "scroll"];
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
