import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative"
  }
}), []);

export default useSx;