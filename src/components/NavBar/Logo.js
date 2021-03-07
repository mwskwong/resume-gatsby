import { Button, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import data from "contents/data";
import { memo } from "react";
import useSx from "./useLogoSx";

const Logo = ({ sx: sxProp }) => {
  const sx = useSx();

  const handleScrollToTop = () => window.scroll({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Button sx={sxProp} onClick={handleScrollToTop}>
      <Typography sx={sx.text} variant="h5">
        {data.firstName}
      </Typography>
    </Button>
  );
};

Logo.propTypes = {
  sx: PropTypes.object
};

Logo.whyDidYouRender = true;

export default memo(Logo);