import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 3,
    pt: 3
  }
}), []);

export default useSx;