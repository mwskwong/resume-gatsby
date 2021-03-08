import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    mt: 3,
    pt: 3,
    justifyContent: "space-evenly"
  }
}), []);

export default useSx;