import { AppBar, Collapse, IconButton, List, Toolbar, useScrollTrigger, useTheme } from "@material-ui/core";
import { Fragment, memo, useCallback, useMemo, useState } from "react";

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

  const toolbarContent = useMemo(() => (
    <Fragment>
      <Logo sx={sx.logo} />
      <Hidden mdDown implementation="css">
        <nav>
          {Object.values(nav).filter(({ id }) => id !== nav.home.id).map(({ id, name }) => (
            <NavButton
              key={id}
              id={id}
              label={name}
              active={activeSectionId === id}
            />
          ))}
        </nav>
      </Hidden>
      <Hidden mdUp>
        <IconButton onClick={handleMenuToggle} aria-label="toggle menu">
          <Menu />
        </IconButton>
      </Hidden>
    </Fragment>
  ), [activeSectionId, handleMenuToggle, sx.logo]);

  return (
    <AppBar color={color} elevation={elevation}>
      <Toolbar>
        <ThemeProvider mode={trigger || menuEnter ? "light" : "dark"}>
          {toolbarContent}
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
            {Object.values(nav).filter(({ id }) => id !== nav.home.id).map(({ id, name }) => (
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