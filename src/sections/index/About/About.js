import { Box, Container } from "@material-ui/core";

import { HexagonSlice1 } from "mdi-material-ui";
import LanguagesFallback from "./LanguagesFallback";
import Message from "./Message";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import constants from "contents/constants";
import loadable from "@loadable/component";
import { memo } from "react";
import nav from "contents/nav";
import { useInView } from "react-intersection-observer";
import useSx from "./useAboutSx";

const languageFallback = <LanguagesFallback />;
const Languages = loadable(() => import(/* webpackPreload: true */ "./Languages"), {
  fallback: languageFallback
});

const About = () => {
  const sx = useSx();
  const { ref, inView } = useInView({
    rootMargin: "50%",
    triggerOnce: true
  });

  return (
    <Box component="section" sx={sx.root} id={nav.about.id}>
      <Container>
        <SectionHeader
          heading={constants.aboutMe}
          Icon={HexagonSlice1}
        />
        <Message />
        <Box ref={ref}>
          {inView ? <Languages /> : languageFallback}
        </Box>
        <SkillSet />
      </Container>
    </Box>
  );
};

About.whyDidYouRender = true;

export default memo(About);