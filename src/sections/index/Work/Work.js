import Companies from "./Companies";
import { Container } from "@material-ui/core";
import { HexagonSlice3 } from "mdi-material-ui";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import WorkingExpTimeline from "./WorkingExpTimeline";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";

const Work = () => (
  <LazyHydrate whenVisible>
    <Container component='section' id={nav.work.id}>
      <SectionHeader
        heading={constants.workingExperience}
        Icon={HexagonSlice3}
      />
      <WorkingExpTimeline />
      <Companies />
    </Container>
  </LazyHydrate>
);

Work.whyDidYouRender = true;

export default memo(Work);