import { Box, Container, Grid } from "@mui/material";

import { HexagonSlice4 } from "mdi-material-ui";
import ProjectCard from "./ProjectCard";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useProjectSx";

const Project = () => {
  const sx = useSx();

  return (
    <Container component="section" id={nav.project.id}>
      <SectionHeader
        heading={constants.myProject}
        Icon={HexagonSlice4}
      />
      <Box sx={sx.gridContainer}>
        <Grid container spacing={4}>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard project="mysql" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard project="dbPwdManager" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard project="delphix" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard project="tsis" />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <ProjectCard project="timeOffApplication" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Project.whyDidYouRender = true;

export default memo(Project);