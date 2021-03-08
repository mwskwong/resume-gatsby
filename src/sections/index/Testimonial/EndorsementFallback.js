import { Box, Skeleton, Typography } from "@material-ui/core";

import useSx from "./useEndorsementFallbackSx";

const EndorsementFallback = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Skeleton sx={sx.userIcon} variant="circular" />
      <Typography sx={sx.name} variant="h6">
        <Skeleton />
      </Typography>
      <Skeleton sx={sx.company} />
      <Box sx={sx.commentContainer}>
        {sx.comments.map((comment, index) => (
          <Skeleton
            key={index}
            sx={comment}
          />
        ))}
      </Box>
    </Box>
  );
};

EndorsementFallback.whyDidYouRender = true;

export default EndorsementFallback;