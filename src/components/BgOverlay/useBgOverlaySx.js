import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    zIndex: 1,
    bgcolor: "rgba(0, 0, 0, .7)",
    width: "100%",
    height: "100%"
  }
}), []);

export default useSx;