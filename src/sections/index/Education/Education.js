import { Container } from "@mui/material";
import Courses from "./Courses";
import EducationalExpTimeline from "./EducationalExpTimeline";
import HexSlice3 from "components/icons/HexSlice3";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";

const Education = () => (
  <Container component="section" id={nav.education.id}>
    <SectionHeader
      heading={constants.education}
      Icon={HexSlice3}
    />
    <EducationalExpTimeline />
    <Courses />
  </Container >
);

Education.whyDidYouRender = true;

export default memo(Education);