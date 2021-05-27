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
  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <LazyHydrate whenVisible>
        <About />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <FunFact />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Education />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Work />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Project />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Testimonial />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Contact />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <Footer />
      </LazyHydrate>
      <LazyHydrate whenVisible>
        <ScrollToTopFab />
      </LazyHydrate>
    </Box >
  );
};

Index.whyDidYouRender = true;

export default Index;
