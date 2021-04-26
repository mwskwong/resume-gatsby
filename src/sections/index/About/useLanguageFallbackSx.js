import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: 300,
    mt: 6,
    mx: "auto",
    width: "100%",
    maxWidth: 352.21
  }
}), []);

export default useSx;