import { Button, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

import constants from "contents/constants";
import isSWUpdateReadySelector from "selectors/isSWUpdateReady";
import { useSelector } from "react-redux";
import useShowScrollToTopFab from "hooks/useShowScrollToTopFab";
import useSx from "./usePWASnackbarSx";

const PWASnackbar = () => {
  const isSWUpdateReady = useSelector(isSWUpdateReadySelector);
  const [open, setOpen] = useState(false);
  const showScrollToTopFab = useShowScrollToTopFab();
  const sx = useSx({ showScrollToTopFab });
  const TransitionProps = {
    mountOnEnter: true,
    unmountOnExit: true
  };

  const handleReloadButtonClick = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => setOpen(isSWUpdateReady), [isSWUpdateReady]);

  return (
    <Snackbar
      sx={sx.root}
      TransitionProps={TransitionProps}
      open={open}
      message={constants.swNewContentAvailMessage}
      action={
        <Button color="secondary" onClick={handleReloadButtonClick}>
          {constants.reload}
        </Button>
      }
    />
  );
};

PWASnackbar.whyDIdYouRender = true;

export default PWASnackbar;