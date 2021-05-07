import { Snackbar, useScrollTrigger } from "@material-ui/core";
import { useEffect, useState } from "react";

import ReloadButton from "./ReloadButton";
import constants from "contents/constants";
import { isSwNewContentAvail } from "selectors";
import { useSelector } from "react-redux";
import useSx from "./useSwSnackbarSx";

const SwSnackbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });
  const sx = useSx({ hasFab: trigger });
  const swNewContentAvail = useSelector(isSwNewContentAvail);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => setOpen(swNewContentAvail), [swNewContentAvail]);


  return (
    <Snackbar
      sx={sx.root}
      open={open}
      message={constants.swNewContentAvailMessage}
      action={<ReloadButton onClose={handleClose} />}
    />
  );
};

SwSnackbar.whyDidYouRender = true;

export default SwSnackbar;