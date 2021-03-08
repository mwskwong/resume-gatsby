import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  }
}), []);

export default useSx;