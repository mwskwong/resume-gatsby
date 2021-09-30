import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  root: {
    width: active ? 20 : 12,
    height: 6,
    bgcolor: "text.primary",
    opacity: active ? .87 : .5,
    borderRadius: "3px",
    mx: .5,
    transition: theme => theme.transitions.create("all", {
      duration: theme.transitions.duration.standard
    }),
    "&:hover": {
      opacity: .87
    }
  }
}), [active]);

export default useSx;