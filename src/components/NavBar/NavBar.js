import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  List,
  Stack,
  Toolbar,
  useScrollTrigger,
  useTheme
} from "@material-ui/core";
import { memo, useCallback, useState } from "react";

import Close from "components/icons/Close";
import { Hidden } from "@material-ui/core";
import LazyHydrate from "react-lazy-hydration";
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
  const [id, setId] = useState(activeSectionId);

  const color = trigger ? "secondary" : appBarDefaultProps.color;
  const elevation = trigger ? 4 : appBarDefaultProps.elevation;

  const handleMenuToggle = useCallback(() => setMenuOpen(menuOpen => !menuOpen), []);
  const handleNavListItemClick = useCallback(id => {
    handleMenuToggle();
    setId(id);
  }, [handleMenuToggle]);
  const handleNavMenuExited = () => window.location.hash = `#${id}`;

  const TransitionProps = {
    onExited: handleNavMenuExited
  };

  return (
    <LazyHydrate whenIdle>
      <AppBar color={color} elevation={elevation}>
        <Toolbar>
          <AppBarContent
            mode={trigger ? "light" : "dark"}
            activeSectionId={activeSectionId}
            onMenuToggle={handleMenuToggle}
          />
        </Toolbar>
      </AppBar>
      <Dialog
        fullScreen
        open={menuOpen}
        onClose={handleMenuToggle}
        TransitionProps={TransitionProps}
      >
        <AppBar color="secondary">
          <Toolbar>
            <Logo onClick={handleMenuToggle} />
            <Box sx={sx.spacer} />
            <IconButton onClick={handleMenuToggle}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <List sx={sx.navList} component="nav" aria-label="nav list">
          {Object.values(nav).map(({ id, name }) => (
            <NavListItem
              key={id}
              id={id}
              label={name}
              active={activeSectionId === id}
              onClick={handleNavListItemClick}
            />
          ))}
        </List>
      </Dialog>
    </LazyHydrate>
  );
};

/** Performance optimization */
// eslint-disable-next-line react/prop-types
const AppBarContent = memo(({ activeSectionId, mode, onMenuToggle }) => {
  const sx = useSx();
  return (
    <ThemeProvider mode={mode}>
      <Logo />
      <Box sx={sx.spacer} />
      <Hidden mdDown implementation="css">
        <Stack component="nav" spacing={1} direction="row">
          {Object.values(nav).map(({ id, name }) => (
            <NavButton
              key={id}
              id={id}
              label={name}
              active={activeSectionId === id}
            />
          ))}
        </Stack>
      </Hidden>
      <Hidden mdUp implementation="css">
        <IconButton onClick={onMenuToggle} aria-label="toggle menu">
          <Menu />
        </IconButton>
      </Hidden>
    </ThemeProvider>
  );
});
AppBarContent.displayName = "AppBarContent";
AppBarContent.whyDidYouRender = true;

NavBar.whyDidYouRender = true;

export default memo(NavBar);