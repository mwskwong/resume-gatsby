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
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const Index = () => {

  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <About />
      <FunFact />
      <Education />
      <Work />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTopFab />
    </Box >
  );
};

Index.whyDidYouRender = true;

export default Index;
