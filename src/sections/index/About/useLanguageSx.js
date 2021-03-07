import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    height: 300,
    mt: 6
  }
}), []);

export default useSx;