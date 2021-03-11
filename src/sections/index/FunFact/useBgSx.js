import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: "100%"
  }
}), []);

export default useSx;