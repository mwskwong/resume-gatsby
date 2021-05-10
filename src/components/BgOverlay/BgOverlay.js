import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useBgOverlaySx";

const BgOverlay = ({ children, sx: sxProp, ...props }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root} {...props}>
      {children}
    </Box>
  );
};

BgOverlay.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object
};

BgOverlay.whyDidYouRender = true;

export default memo(BgOverlay);