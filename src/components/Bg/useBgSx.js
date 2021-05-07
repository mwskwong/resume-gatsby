import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    ...sxProp
  },
  img: {

  }
}), [sxProp]);

export default useSx;