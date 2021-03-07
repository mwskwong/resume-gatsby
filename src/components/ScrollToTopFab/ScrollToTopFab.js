import { Fab, Zoom, useScrollTrigger } from "@material-ui/core";

import ArrowUp from "components/icons/ArrowUp";
import useSx from "./useScrollToTopFabSx";

const ScrollToTopFab = () => {
  const sx = useSx();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  const handleScrollToTop = () => window.scroll({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Zoom in={trigger}>
      <Fab
        sx={sx.fab}
        size="small"
        color="primary"
        onClick={handleScrollToTop}
        aria-label="scroll to top"
      >
        <ArrowUp sx={sx.icon} />
      </Fab>
    </Zoom>
  );
};

ScrollToTopFab.whyDidYouRender = true;

export default ScrollToTopFab;
