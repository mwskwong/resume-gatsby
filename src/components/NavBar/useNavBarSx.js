import { useMemo } from "react";

const useSx = ({ solidBg }) => useMemo(() => ({
  root: {
    borderBottomColor: solidBg ? undefined : "transparent"
  },
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
}), [solidBg]);

export default useSx;