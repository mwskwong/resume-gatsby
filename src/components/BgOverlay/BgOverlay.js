import { Box } from "@material-ui/core";
import { memo } from "react";
import useSx from "./useBgOverlaySx";

const BgOverlay = () => {
  const sx = useSx();
  return <Box sx={sx.root} />;
};

BgOverlay.whyDidYouRender = true;

export default memo(BgOverlay);