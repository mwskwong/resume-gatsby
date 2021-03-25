import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    justifyContent: "center"
  }
}), []);

export default useSx;