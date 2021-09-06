import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";
import Quote from "components/icons/Quote";
import { memo } from "react";
import useSx from "./useEndorsementSx";

const Endorsement = ({ name, company, comment }) => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Quote sx={sx.quoteIcon} />
      <Typography sx={sx.name} variant="h6">
        {name}
      </Typography>
      <Typography sx={sx.company}>
        {company}
      </Typography>
      <Typography sx={sx.comment}>
        {comment}
      </Typography>
    </Box>
  );
};

Endorsement.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  comment: PropTypes.string
};

Endorsement.whyDidYouRender = true;

export default memo(Endorsement);