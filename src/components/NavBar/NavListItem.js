import { ListItem, ListItemText } from "@material-ui/core";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active, onClick }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };

  const handleClick = () => onClick && onClick(id);

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText
        primary={label}
        primaryTypographyProps={primaryTypographyProps}
      />
    </ListItem >
  );
};

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string
};

NavListItem.whyDidYouRender = true;

export default memo(NavListItem);