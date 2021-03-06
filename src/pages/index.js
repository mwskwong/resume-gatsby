import { Box } from "@material-ui/core";
import Footer from "components/Footer";
import Home from "components/Home";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const Index = () => {
  return (
    <Box component="main">
      <SEO />
      <NavBar />
      <Home />
      <div style={{ height: 2000 }} />
      <Footer />
      <ScrollToTopFab />
    </Box>
  );
};

export default Index;
