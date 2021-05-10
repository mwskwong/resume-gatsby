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
    }
  },
  navList: {
    bgcolor: "background.paper"
  }
}), []);

export default useSx;