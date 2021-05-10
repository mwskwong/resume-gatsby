import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  Stack,
  Toolbar,
  useScrollTrigger,
  useTheme
} from "@material-ui/core";
import { Fragment, memo, useCallback, useMemo, useState } from "react";

import Logo from "./Logo";
import Menu from "components/icons/Menu";
import NavButton from "./NavButton";
import NavListItem from "./NavListItem";
import ThemeProvider from "components/ThemeProvider";
import nav from "contents/nav";
import useActiveSectionId from "hooks/useActiveSectionId";
import useSx from "./useNavBarSx";

const NavBar = () => {
  const sx = useSx();
  const theme = useTheme();
  const appBarDefaultProps = {
    color: theme.components.MuiAppBar.defaultProps.color,
    elevation: theme.components.MuiAppBar.defaultProps.elevation
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  const activeSectionId = useActiveSectionId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuExited, setMenuExited] = useState(true);

  const color = trigger || !menuExited ? "secondary" : appBarDefaultProps.color;
  const elevation = trigger ? 4 : appBarDefaultProps.elevation;

  const handleMenuToggle = useCallback(() => {
    setMenuOpen(menuOpen => !menuOpen);
    setMenuExited(false);
  }, []);
  const handleMenuExited = () => setMenuExited(true);

  const appBarContent = useMemo(() => (
    <ThemeProvider mode={trigger || !menuExited ? "light" : "dark"}>
      <Logo />
      <Box sx={sx.spacer} />
      <Stack
        sx={sx.navButtonContainer}
        component="nav"
        spacing={1}
        direction="row"
      >
        {Object.values(nav).map(({ id, name }) => (
          <NavButton
            key={id}
            id={id}
            label={name}
            active={activeSectionId === id}
          />
        ))}
      </Stack>
      <IconButton
        sx={sx.menuButton}
        onClick={handleMenuToggle}
        aria-label="toggle menu"
      >
        <Menu />
      </IconButton>
    </ThemeProvider>
  ), [
    activeSectionId,
    handleMenuToggle,
    menuExited,
    sx.menuButton,
    sx.navButtonContainer,
    sx.spacer,
    trigger
  ]);

  return (
    <Fragment>
      <AppBar color={color} elevation={elevation}>
        <Toolbar>
          {appBarContent}
        </Toolbar>
        <Collapse in={menuOpen} timeout="auto" unmountOnExit onExited={handleMenuExited}>
          <List sx={sx.navList} component="nav" aria-label="nav list">
            {Object.values(nav).map(({ id, name }) => (
              <NavListItem
                key={id}
                id={id}
                label={name}
                active={activeSectionId === id}
              />
            ))}
          </List>
        </Collapse>
      </AppBar>
    </Fragment>
  );
};

NavBar.whyDidYouRender = true;

export default memo(NavBar);