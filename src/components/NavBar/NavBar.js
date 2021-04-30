import { AppBar, Box, Collapse, IconButton, List, Stack, Toolbar, useScrollTrigger, useTheme } from "@material-ui/core";
import { memo, useCallback, useState } from "react";

import { Hidden } from "@material-ui/core";
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
  const [menuEnter, setMenuEnter] = useState(false);

  const color = trigger || menuEnter ? "secondary" : appBarDefaultProps.color;
  const elevation = trigger || menuEnter ? 4 : appBarDefaultProps.elevation;

  const handleMenuToggle = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);
  const handleMenuEnter = () => setMenuEnter(true);
  const handleMenuExited = () => setMenuEnter(false);

  return (
    <AppBar color={color} elevation={elevation}>
      <Toolbar sx={sx.toolbar}>
        <ThemeProvider mode={trigger || menuEnter ? "light" : "dark"}>
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
            <IconButton onClick={handleMenuToggle} aria-label="toggle menu">
              <Menu />
            </IconButton>
          </Hidden>
        </ThemeProvider>
      </Toolbar>
      <Hidden mdUp implementation="css">
        <Collapse
          in={menuOpen}
          timeout="auto"
          onEnter={handleMenuEnter}
          onExited={handleMenuExited}
        >
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
      </Hidden>
    </AppBar>
  );
};

NavBar.whyDidYouRender = true;

export default memo(NavBar);