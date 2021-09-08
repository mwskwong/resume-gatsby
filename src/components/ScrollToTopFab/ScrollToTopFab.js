import { Fab, Zoom } from "@mui/material";

import ArrowUp from "components/icons/ArrowUp";
import { memo } from "react";
import nav from "contents/nav";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";
import useSx from "./useScrollToTopFabSx";

const ScrollToTopFab = () => {
  const sx = useSx();
  const show = useShowScrollToTopFab();

  return (
    <Zoom in={show} mountOnEnter unmountOnExit>
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
