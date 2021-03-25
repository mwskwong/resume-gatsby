import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    fontWeight: 500,
    color: "text.primary",
    textAlign: "center",
    mt: 2
  },
  value: {
    color: "text.secondary",
    textAlign: "center"
  }
}), []);

export default useSx;