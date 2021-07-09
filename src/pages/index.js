import { Suspense, lazy } from "react";

import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

const About = lazy(() => import("sections/index/About"));
const Contact = lazy(() => import("sections/index/Contact"));
const Education = lazy(() => import("sections/index/Education"));
const Footer = lazy(() => import("sections/index/Footer"));
const FunFact = lazy(() => import("sections/index/FunFact"));
const Home = lazy(() => import("sections/index/Home"));
const Project = lazy(() => import("sections/index/Project"));
const Testimonial = lazy(() => import("sections/index/Testimonial"));
const Work = lazy(() => import("sections/index/Work"));

const Index = () => {
  return (
    <main>
      <SEO />
      <NavBar />
      <Suspense fallback={null}>
        <Home />
        <About />
        <FunFact />
        <Education />
        <Work />
        <Project />
        <Testimonial />
        <Contact />
        <Footer />
      </Suspense>
      <ScrollToTopFab />
    </main>
  );
};

Index.whyDidYouRender = true;

export default Index;
