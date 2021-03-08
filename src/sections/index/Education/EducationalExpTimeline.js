import { graphql, useStaticQuery } from "gatsby";

import { Box } from "@material-ui/core";
import ExpTimeline from "components/ExpTimeline";
import data from "contents/data";
import useSx from "./useEducationalExpTimelineSx";

const EducationalExpTimeline = () => {
  const sx = useSx();
  const { workDoc: { edges: docs } } = useStaticQuery(graphql`
    query {
      workDoc: allFile(
        filter: {sourceInstanceName: {eq: "documents"}, relativeDirectory: {eq: "educations"}}
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
        data={data.education.experiences.map(({
          period,
          school,
          subject,
          description,
          proof
        }) => ({
          period,
          title: subject,
          subheader: school,
          description,
          file: proof
            ? docs.find(({ node: { relativePath } }) => relativePath === proof).node.publicURL
            : null
        }))}
      />
    </Box>
  );
};

EducationalExpTimeline.whyDidYouRender = true;

export default EducationalExpTimeline;