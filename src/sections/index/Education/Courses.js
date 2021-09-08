import { Box, Chip } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import Microsoft from "components/icons/Microsoft";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import data from "contents/data";
import useSx from "./useCoursesSx";

const Courses = () => {
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
      {data.education.courses.map(({ label, issuedBy, proof }) => {
        const doc = proof && docs.find(({ node: { relativePath } }) => relativePath === proof).node.publicURL;
        const icon = issuedBy === "Microsoft"
          ? <Microsoft fontSize="small" />
          : issuedBy === "Oracle"
            ? <Oracle fontSize="small" />
            : issuedBy === "Udemy"
              ? <Udemy fontSize="small" />
              : null;
        return (
          <Chip
            key={label}
            sx={sx.chip}
            variant="outlined"
            label={label}
            icon={icon}
            clickable={Boolean(doc)}
            component="a"
            href={doc}
            target="_blank"
            rel="noopener noreferrer"
          />
        );
      })}
    </Box>
  );
};

Courses.whyDidYouRender = true;

export default Courses;