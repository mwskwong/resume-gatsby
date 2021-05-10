import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    py: 0
  },
  bg: {
    py: 10
  }
}), []);

export default useSx;