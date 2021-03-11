import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    p: 0,
    height: "100vh",
    bgcolor: "#afb8c6"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  socialMedia: {
    mt: 3
  },
  downloadResumeButton: {
    mt: 4
  }
}), []);

export default useSx;