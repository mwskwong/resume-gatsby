import { Box, Button } from "@material-ui/core";

import PropTypes from "prop-types";
import useSx from "./useNavButtonSx";

const NavButton = ({ label, id, active }) => {
  const sx = useSx();
  const section = document.getElementById(id);

  const handleScrollToSection = () => section.scrollIntoView({ behavior: "smooth" });

  return (
    <Button sx={sx.root} onClick={handleScrollToSection}>
      {label}
      {
        active
          ? <Box component="span" sx={sx.active} />
          : null
      }
    </Button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavButton;