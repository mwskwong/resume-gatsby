import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "rgba(0, 0, 0, .7)",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -100
  }
}), []);

export default useSx;