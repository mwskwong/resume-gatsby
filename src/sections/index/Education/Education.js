import { Box, Container } from "@material-ui/core";

import EducationalExpTimeline from "./EducationalExpTimeline";
import { HexagonSlice2 } from "mdi-material-ui";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useEducationSx";

const Education = () => {
  const sx = useSx();
  return (
    <Box sx={sx.root} component="section" id={nav.education.id}>
      <Container>
        <SectionHeader
          heading={constants.education}
          Icon={HexagonSlice2}
        />
        <EducationalExpTimeline />
      </Container>
    </Box>
  );
};

Education.whyDidYouRender = true;

export default memo(Education);