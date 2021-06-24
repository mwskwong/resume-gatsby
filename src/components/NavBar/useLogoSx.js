import { useMemo } from "react";

const useSx = ({ sxProp }) => useMemo(() => ({
  root: {
    transition: theme => theme.transitions.create(
      ["background-color", "color"],
      { duration: theme.transitions.duration.short }
    ),
    ...sxProp
  },
  text: {
    fontFamily: "\"Azonix\", sans-serif"
  }
}), [sxProp]);

export default useSx;