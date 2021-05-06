import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useBgSx";

const Bg = ({ sx: sxProp, ...props }) => {
  const sx = useSx();

  const rootSx = { ...sx.root, ...sxProp };
  return (
    <GatsbyImage
      {...props}
      style={rootSx}
      imgStyle={sx.img}
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