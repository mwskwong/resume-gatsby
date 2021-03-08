import About from "sections/index/About";
import { Box } from "@material-ui/core";
import Contact from "sections/index/Contact";
import Footer from "sections/index/Footer";
import Home from "sections/index/Home";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "sections/index/Testimonial";

const Index = () => {
  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <About />
      <div style={{ height: 2000 }} />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTopFab />
    </Box>
  );
};

Index.whyDidYouRender = true;

export default Index;
