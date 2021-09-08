import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    width: "100%"
  }
}), []);

export default useSx;