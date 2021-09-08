import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    mt: 3,
    pt: 3
  },
  chip: {
    m: .5,
    "& .MuiChip-icon": {
      ml: 1
    },
    textOverflow: "ellipsis",
    maxWidth: `calc(100% - ${4 * 2}px)`
  }
}), []);

export default useSx;