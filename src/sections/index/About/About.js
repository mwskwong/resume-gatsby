import { Suspense, lazy, memo } from "react";

import { Container } from "@material-ui/core";
import { HexagonSlice1 } from "mdi-material-ui";
import Message from "./Message";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import constants from "contents/constants";
import nav from "contents/nav";

const Languages = lazy(() => import("./Languages"));

const About = () => {
  return (
    <Container component="section" id={nav.about.id}>
      <SectionHeader
        heading={constants.aboutMe}
        Icon={HexagonSlice1}
      />
      <Message />
      <Suspense fallback={null}>
        <Languages />
      </Suspense>
      <SkillSet />
    </Container>
  );
};

About.whyDidYouRender = true;

export default memo(About);