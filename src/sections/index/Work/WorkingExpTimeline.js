import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@mui/material";
import ExpTimeline from "components/ExpTimeline";
import data from "contents/data";
import useSx from "./useWorkingExperienceTimelineSx";

const WorkingExpTimeline = () => {
  const sx = useSx();
  const { workDoc: { edges: docs } } = useStaticQuery(graphql`
    query {
      workDoc: allFile(
        filter: {sourceInstanceName: {eq: "documents"}, relativeDirectory: {eq: "works"}}
      ) {
        edges {
          node {
            publicURL
            relativePath      
          }
        }
      }
    }  
  `);

  return (
    <Box sx={sx.root}>
      <ExpTimeline
        data={data.work.experiences.map(({ period, position, company, details, proof }) => ({
          period,
          title: position,
          subheader: company,
          details,
          file: proof
            ? docs.find(({ node: { relativePath } }) => relativePath === proof).node.publicURL
            : null
        }))}
      />
    </Box>
  );
};

WorkingExpTimeline.whyDidYouRender = true;

export default WorkingExpTimeline;