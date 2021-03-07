import { ListItem, ListItemText } from "@material-ui/core";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active }) => {
  const sx = useSx({ active });
  const section = document.getElementById(id);

  const primaryTypographyProps = { sx: sx.textPrimary };

  const handleScrollToSection = () => section.scrollIntoView({ behavior: "smooth" });

  return (
    <ListItem button onClick={handleScrollToSection}>
      <ListItemText
        primary={label}
        primaryTypographyProps={primaryTypographyProps}
      />
    </ListItem >
  );
};

NavListItem.muiName = ListItem.muiName;

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

NavListItem.whyDidYouRender = true;

export default memo(NavListItem);