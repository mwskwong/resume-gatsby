import { Fragment, memo } from "react";

import { Box } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import useSx from "./useBgSx";

const Bg = ({ children, sx: sxProp, ...props }) => {
  const sx = useSx({ sx: sxProp });

  return (
    <Fragment>
      <GatsbyImage
        {...props}
        style={sx.root}
        alt=""
      />
      <Box sx={sx.wrapper}>
        {children}
      </Box>
    </Fragment>
  );
};

Bg.propTypes = {
  ...GatsbyImage.propTypes,
  alt: PropTypes.any
};

Bg.whyDidYouRender = true;

export default memo(Bg);