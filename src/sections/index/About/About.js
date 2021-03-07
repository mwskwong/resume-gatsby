import { Box, Container } from "@material-ui/core";

import { HexagonSlice1 } from "mdi-material-ui";
import LanguagesFallback from "./LanguagesFallback";
import Message from "./Message";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import constants from "contents/constants";
import loadable from "@loadable/component";
import nav from "contents/nav";
import { useInView } from "react-intersection-observer";

const Languages = loadable(() => import(/* webpackPrefetch: true */ "./Languages"), {
  fallback: <LanguagesFallback />
});

const About = () => {
  const { ref, inView } = useInView({
    rootMargin: "50%",
    triggerOnce: true
  });

  return (
    <Container component="section" id={nav.about.id}>
      <SectionHeader
        heading={constants.aboutMe}
        Icon={HexagonSlice1}
      />
      <Message />
      <Box ref={ref}>
        {inView ? <Languages /> : <LanguagesFallback />}
      </Box>
      <SkillSet />
    </Container>
  );
};

export default About;