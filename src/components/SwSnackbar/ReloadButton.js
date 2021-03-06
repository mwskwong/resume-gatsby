import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import constants from "contents/constants";

const ReloadButton = ({ onClose }) => {
  const handleReload = () => {
    onClose();
    window.location.reload();
  };

  return (
    <Button color="secondary" size="small" onClick={handleReload}>
      {constants.reload}
    </Button>
  );
};

ReloadButton.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ReloadButton;