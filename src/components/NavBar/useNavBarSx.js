import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  navButtonContainer: {
    display: {
      xs: "none",
      md: "flex"
    }
  },
  spacer: {
    flex: 1
  },
  menuButton: {
    display: {
      xs: "inline-flex",
      md: "none"
    },
    transition: theme => theme.transitions.create(
      ["background-color", "color"],
      { duration: theme.transitions.duration.short }
    )
  },
  navList: {
    bgcolor: "background.paper"
  }
}), []);

export default useSx;