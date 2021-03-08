import { Box, Grid, Skeleton } from "@material-ui/core";

import useSx from "./useContactFormFallbackSx";

const ContactFormFallback = () => {
  const sx = useSx();

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <Skeleton sx={sx.textField} variant="rectangular" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Skeleton sx={sx.textField} variant="rectangular" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton sx={sx.textField} variant="rectangular" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton sx={sx.textArea} variant="rectangular" />
        </Grid>
      </Grid>
      <Skeleton sx={sx.submitButton} variant="rectangular" />
    </Box>
  );
};

ContactFormFallback.whyDidYouRender = true;

export default ContactFormFallback;