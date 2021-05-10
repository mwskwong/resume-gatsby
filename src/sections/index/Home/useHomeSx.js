import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    p: 0,
    height: "100vh"
  },
  bg: {
    display: "flex",
    flexDirection: "column"
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