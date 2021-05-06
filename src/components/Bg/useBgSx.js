import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  img: {

  }
}), []);

export default useSx;