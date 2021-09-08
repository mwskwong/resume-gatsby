import Companies from "./Companies";
import { Container } from "@mui/material";
import HexSlice2 from "components/icons/HexSlice2";
import SectionHeader from "components/SectionHeader";
import WorkingExpTimeline from "./WorkingExpTimeline";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";

const Work = () => (
  <Container component="section" id={nav.work.id}>
    <SectionHeader
      heading={constants.workingExperience}
      Icon={HexSlice2}
    />
    <WorkingExpTimeline />
    <Companies />
  </Container>
);

Work.whyDidYouRender = true;

export default memo(Work);