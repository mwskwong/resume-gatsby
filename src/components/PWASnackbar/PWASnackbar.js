import { Button, Snackbar } from "@material-ui/core";
import { useEffect, useState } from "react";

import constants from "contents/constants";
import isSWUpdateReadySelector from "selectors/isSWUpdateReady";
import { useSelector } from "react-redux";

const PWASnackbar = () => {
  const isSWUpdateReady = useSelector(isSWUpdateReadySelector);
  const [open, setOpen] = useState(false);

  const handleReloadButtonClick = () => {
    setOpen(false);
    window.location.reload();
  };

  useEffect(() => setOpen(isSWUpdateReady), [isSWUpdateReady]);

  return (
    <Snackbar
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