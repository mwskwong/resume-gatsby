import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import { memo } from "react";

const Microsoft = ({ sx: sxProp, ...props }) => {
  const sx = { p: "2px", ...sxProp };

  return (
    <SvgIcon sx={sx} {...props}>
      <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" />
    </SvgIcon>
  );
};

Microsoft.muiName = SvgIcon.muiName;
Microsoft.whyDidYouRender = true;
Microsoft.propTypes = {
  sx: PropTypes.object
};

export default memo(Microsoft);
