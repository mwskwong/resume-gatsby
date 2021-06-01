import {
  About,
  Contact,
  Education,
  Footer,
  FunFact,
  Home,
  Project,
  Testimonial,
  Work
} from "sections/index";

import { Box } from "@material-ui/core";
import LazyHydrate from "react-lazy-hydration";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const Index = () => {
  const options = { rootMargin: "0px" };
  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <LazyHydrate whenVisible={options}>
        <About />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <FunFact />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Education />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Work />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Project />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Testimonial />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Contact />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <Footer />
      </LazyHydrate>
      <LazyHydrate whenVisible={options}>
        <ScrollToTopFab />
      </LazyHydrate>
    </Box>
  );
};

Index.whyDidYouRender = true;

export default Index;
