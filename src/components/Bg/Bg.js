import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useBgSx";

const Bg = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ sx: sxProp });

  return (
    <GatsbyImage
      {...props}
      style={sx.root}
      alt=""
    />
  );
};

Bg.propTypes = {
  ...GatsbyImage.propTypes,
  alt: PropTypes.any
};

Bg.whyDidYouRender = true;

export default memo(Bg);