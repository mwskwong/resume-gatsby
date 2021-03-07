import { Box, Skeleton, Typography } from "@material-ui/core";

import useSx from "./usePersonalInfoFallbackSx";

const PersonalInfoFallback = () => {
  const sx = useSx();

  return (
    <Box sx={sx.personalInfoContainer}>
      <PersonalInfoItemFallback />
      <PersonalInfoItemFallback />
      <PersonalInfoItemFallback />
    </Box>
  );
};

const PersonalInfoItemFallback = () => {
  const sx = useSx();

  return (
    <Box sx={sx.personalInfoItemContainer}>
      <Skeleton sx={sx.icon} variant="circular" />
      <Typography sx={sx.personalInfoItemTitle} gutterBottom>
        <Skeleton />
      </Typography>
      <Typography sx={sx.personalInfoItemValue} gutterBottom>
        <Skeleton />
      </Typography>
    </Box>
  );
};

export default PersonalInfoFallback;