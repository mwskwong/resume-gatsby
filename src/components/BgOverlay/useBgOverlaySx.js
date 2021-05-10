import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    position: "relative",
    zIndex: 1,
    // bgcolor: "rgba(0, 0, 0, .7)",
    width: "100%",
    height: "100%",
    ...sxProp
  }
}), [sxProp]);

export default useSx;