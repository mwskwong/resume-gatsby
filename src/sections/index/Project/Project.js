import { Box, Container, Grid } from "@mui/material";

import HexSlice4 from "components/icons/HexSlice4";
import ProjectCard from "./ProjectCard";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import data from "contents/data";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useProjectSx";

const Project = () => {
  const sx = useSx();

  return (
    <Container component="section" id={nav.project.id}>
      <SectionHeader
        heading={constants.myProject}
        Icon={HexSlice4}
      />
      <Box sx={sx.gridContainer}>
        <Grid container spacing={4}>
          {Object.values(data.project).map(project => (
            <Grid key={project.title} item md={4} sm={6} xs={12}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

Project.whyDidYouRender = true;

export default memo(Project);