import { Box, Skeleton, Stack, Typography } from "@material-ui/core";

import useSx from "./usePersonalInfoFallbackSx";

const PersonalInfoFallback = () => {
  const sx = useSx();

  return (
    <Stack spacing={3} sx={sx.personalInfoContainer}>
      <PersonalInfoItemFallback />
      <PersonalInfoItemFallback />
      <PersonalInfoItemFallback />
    </Stack>
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

PersonalInfoFallback.whyDidYouRender = true;

export default PersonalInfoFallback;