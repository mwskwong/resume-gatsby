import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    p: 4
  }
}), []);

export default useSx;