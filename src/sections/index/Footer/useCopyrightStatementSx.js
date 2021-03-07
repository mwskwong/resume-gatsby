import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    textAlign: "center",
    color: "text.secondary"
  },
  lastName: {
    textTransform: "uppercase"
  }
}), []);

export default useSx;