import { Facebook, Github, Linkedin } from "mdi-material-ui";
import { IconButton, Stack } from "@material-ui/core";

import PropTypes from "prop-types";
import data from "contents/data";
import useSx from "./useSocialMediaSx";

const SocialMedia = ({ sx: sxProp }) => {
  const sx = useSx();
  const rootSx = { ...sx.root, ...sxProp };

  return (
    <Stack spacing={.5} direction="row" sx={rootSx}>
      <IconButton
        sx={sx.iconButton}
        href={data.socialMedia.facebookHref}
        aria-label="navigate to Facebook profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        sx={sx.iconButton}
        href={data.socialMedia.linkedinHref}
        aria-label="navigate to Linkedin profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </IconButton>
      <IconButton
        sx={sx.iconButton}
        href={data.socialMedia.gitHubHref}
        aria-label="navigate to Github profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </IconButton>
    </Stack>
  );
};

SocialMedia.propTypes = {
  sx: PropTypes.object
};

SocialMedia.whyDidYouRender = true;

export default SocialMedia;