import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import constants from "contents/constants";
import resume from "documents/resume.pdf";

const DownloadResumeButton = ({ sx }) => (
  <Button
    sx={sx}
    variant="outlined"
    size="large"
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
  >
    {constants.downloadResumeButtonText}
  </Button>
);

DownloadResumeButton.propTypes = {
  sx: PropTypes.object
};

DownloadResumeButton.whyDidYouRender = true;

export default DownloadResumeButton;