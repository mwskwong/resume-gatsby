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
  // const sectionHydrate = { rootMargin: "0px" };

  return (
    <Box component="main">
      <SEO />
      <LazyHydrate whenVisible whenIdle>
        <NavBar />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Home />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <About />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <FunFact />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Education />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Work />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Project />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Testimonial />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Contact />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <Footer />
      </LazyHydrate>
      <LazyHydrate whenVisible whenIdle>
        <ScrollToTopFab />
      </LazyHydrate>
    </Box>
  );
};

Index.whyDidYouRender = true;

export default Index;
