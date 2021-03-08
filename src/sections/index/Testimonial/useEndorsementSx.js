import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    py: 3
  },
  userIcon: {
    fontSize: 60
  },
  name: {
    mt: 3,
    color: "text.primary"
  },
  company: {
    color: "text.primary"
  },
  comment: {
    mt: 3,
    fontSize: 18,
    maxWidth: 580,
    color: "text.primary",
    textAlign: "center"
  }
}), []);

export default useSx;