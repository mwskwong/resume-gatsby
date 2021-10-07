import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  Stack,
  Toolbar,
  useMediaQuery,
  useScrollTrigger
} from "@mui/material";
import { memo, useCallback, useState } from "react";

import Logo from "./Logo";
import { MenuOutlined } from "@mui/icons-material";
import NavButton from "./NavButton";
import NavListItem from "./NavListItem";
import ThemeProvider from "components/ThemeProvider";
import nav from "contents/nav";
import useActiveSectionId from "hooks/useActiveSectionId";
import useSx from "./useNavBarSx";

const NavBar = () => {
  const mdDown = useMediaQuery(theme => theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSectionId = useActiveSectionId();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  const sx = useSx({ solidBg: mdDown || trigger });

  const handleMenuToggle = useCallback(
    () => setMenuOpen(menuOpen => !menuOpen),
    []
  );

  return (
    <AppBar color={mdDown || trigger ? "secondary" : undefined} sx={sx.root}>
      <Toolbar>
        <ThemeProvider mode={mdDown || trigger ? "light" : "dark"}>
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
            <MenuOutlined />
          </IconButton>
        </ThemeProvider>
      </Toolbar>
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
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
  );
};

NavBar.whyDidYouRender = true;

export default memo(NavBar);