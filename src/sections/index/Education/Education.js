import { Container } from "@mui/material";
import EducationalExpTimeline from "./EducationalExpTimeline";
import { HexagonSlice2 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";

const Education = () => (
  <Container component="section" id={nav.education.id}>
    <SectionHeader
      heading={constants.education}
      Icon={HexagonSlice2}
    />
    <EducationalExpTimeline />
  </Container>
);

Education.whyDidYouRender = true;

export default memo(Education);