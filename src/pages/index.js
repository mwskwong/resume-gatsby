import About from "sections/index/About";
import { Box } from "@material-ui/core";
import Contact from "sections/index/Contact";
import Education from "sections/index/Education";
import Footer from "sections/index/Footer";
import FunFact from "sections/index/FunFact";
import Home from "sections/index/Home";
import NavBar from "components/NavBar";
import Project from "sections/index/Project";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "sections/index/Testimonial";
import Work from "sections/index/Work";

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
    </Box>
  );
};

Index.whyDidYouRender = true;

export default Index;
