import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    bgcolor: "background.default"
  }
}), []);

export default useSx;