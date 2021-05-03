import { ListItem, ListItemText } from "@material-ui/core";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active, onClick }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };

  return (
    <ListItem button component="a" href={`#${id}`} onClick={onClick}>
      <ListItemText
        primary={label}
        primaryTypographyProps={primaryTypographyProps}
      />
    </ListItem >
  );
};

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

NavListItem.whyDidYouRender = true;

export default memo(NavListItem);