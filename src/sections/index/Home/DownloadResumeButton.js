import { graphql, useStaticQuery } from "gatsby";

import { Button } from "@mui/material";
import PropTypes from "prop-types";
import constants from "contents/constants";

const DownloadResumeButton = ({ sx }) => {
  const { file: resume } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "resume.pdf"}) {
        publicURL
      }
    }
  `);

  return (
    <Button
      sx={sx}
      variant="outlined"
      size="large"
      href={resume.publicURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {constants.downloadResumeButtonText}
    </Button>
  );
};

DownloadResumeButton.propTypes = {
  sx: PropTypes.object
};

DownloadResumeButton.whyDidYouRender = true;

export default DownloadResumeButton;