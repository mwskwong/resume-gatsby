import { useMemo } from "react";

const useSx = ({ sx }) => useMemo(() => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    filter: "brightness(30%)"
  },
  wrapper: {
    position: "relative",
    zIndex: 9,
    width: "100%",
    height: "100%",
    ...sx
  }
}), [sx]);

export default useSx;