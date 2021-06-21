import { Container } from "@material-ui/core";
import { HexagonSlice1 } from "mdi-material-ui";
import Message from "./Message";
import SectionHeader from "components/SectionHeader";
import SkillSet from "./SkillSet";
import constants from "contents/constants";
import loadable from "@loadable/component";
import { memo } from "react";
import nav from "contents/nav";

const Languages = loadable(() => import("./Languages"));

const About = () => {
  return (
    <Container component="section" id={nav.about.id}>
      <SectionHeader
        heading={constants.aboutMe}
        Icon={HexagonSlice1}
      />
      <Message />
      <Languages />
      <SkillSet />
    </Container>
  );
};

About.whyDidYouRender = true;

export default memo(About);