import { Fab, Zoom, useScrollTrigger } from "@material-ui/core";

import ArrowUp from "components/icons/ArrowUp";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useScrollToTopFabSx";

const ScrollToTopFab = () => {
  const sx = useSx();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return (
    <Zoom in={trigger} mountOnEnter unmountOnExit>
      <Fab
        sx={sx.fab}
        size="small"
        color="primary"
        component="a"
        aria-label="scroll to top"
        href={`#${nav.home.id}`}
      >
        <ArrowUp />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default memo(ScrollToTopFab);
