import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: 0,
    height: "100vh"
  },
  bgOverlay: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  socialMedia: {
    mt: 3
  },
  downloadResumeButton: {
    mt: 4
  }
}), []);

export default useSx;