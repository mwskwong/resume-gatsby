import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  iconButton: {
    "&:not(:first-of-type):not(:last-of-type)": {
      mx: .5
    }
  }
}), []);

export default useSx;