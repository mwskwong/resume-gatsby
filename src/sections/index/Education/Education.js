import { Container } from "@material-ui/core";
import EducationalExpTimeline from "./EducationalExpTimeline";
import { HexagonSlice2 } from "mdi-material-ui";
import LazyHydrate from "react-lazy-hydration";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";

const Education = () => (
  <LazyHydrate whenVisible>
    <Container component="section" id={nav.education.id}>
      <SectionHeader
        heading={constants.education}
        Icon={HexagonSlice2}
      />
      <EducationalExpTimeline />
    </Container>
  </LazyHydrate>
);

Education.whyDidYouRender = true;

export default memo(Education);