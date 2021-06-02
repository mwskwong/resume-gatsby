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
  const lazyHydrateOptions = { rootMargin: "0px" };

  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <About />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <FunFact />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Education />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Work />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Project />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Testimonial />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Contact />
      </LazyHydrate>
      <LazyHydrate whenVisible={lazyHydrateOptions}>
        <Footer />
      </LazyHydrate>
      <ScrollToTopFab />
    </Box>
  );
};

Index.whyDidYouRender = true;

export default Index;
