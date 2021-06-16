import { Button, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import data from "contents/data";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useLogoSx";

const Logo = ({ sx: sxProp, onClick }) => {
  const sx = useSx();
  const rootSx = { ...sx.root, ...sxProp };

  return (
    <Button sx={rootSx} component="a" href={`#${nav.home.id}`} onClick={onClick}>
      <Typography sx={sx.text} variant="h5">
        {data.firstName}
      </Typography>
    </Button>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  onClick: PropTypes.func
};

Logo.whyDidYouRender = true;

export default memo(Logo);