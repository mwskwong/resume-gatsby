import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    bgcolor: "#7d90a4"
  }
}), []);

export default useSx;