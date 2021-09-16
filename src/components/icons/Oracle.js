import PropTypes from "prop-types";
import { SvgIcon } from "@mui/material";
import { memo } from "react";

const Oracle = ({ sx: sxProp, ...props }) => {
  const sx = { p: "2px", ...sxProp };

  return (
    <SvgIcon sx={sx} {...props}>
      <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
    </SvgIcon>
  );
};

Oracle.muiName = SvgIcon.muiName;
Oracle.whyDidYouRender = true;
Oracle.propTypes = {
  sx: PropTypes.object
};

export default memo(Oracle);
