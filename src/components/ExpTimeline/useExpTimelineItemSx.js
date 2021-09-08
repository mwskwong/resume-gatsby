import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  period: {
    fontSize: 14,
    color: "text.secondary"
  },
  subheader: {
    color: "text.secondary"
  },
  detailsListItem: {
    textAlign: "inherit"
  },
  downloadButton: {
    ml: "auto"
  }
}), []);

export default useSx;