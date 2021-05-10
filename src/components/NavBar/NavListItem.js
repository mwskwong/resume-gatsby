import { ListItem, ListItemText } from "@material-ui/core";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };

  return (
    <ListItem button component="a" href={`#${id}`}>
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
  id: PropTypes.string
};

NavListItem.whyDidYouRender = true;

export default memo(NavListItem);