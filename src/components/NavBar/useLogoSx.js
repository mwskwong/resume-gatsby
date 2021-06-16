import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    transition: theme => theme.transitions.create(
      ["background-color", "color"],
      { duration: theme.transitions.duration.short }
    )
  },
  text: {
    fontFamily: "\"Azonix\", sans-serif"
  }
}), []);

export default useSx;