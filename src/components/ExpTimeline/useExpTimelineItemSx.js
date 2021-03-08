import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  card: {
    backgroundColor: "transparent"
  },
  period: {
    fontSize: 14,
    color: "text.secondary"
  },
  subheader: {
    mb: 2,
    color: "text.secondary"
  },
  description: {
    color: "text.primary"
  },
  downloadButton: {
    ml: "auto"
  }
}), []);

export default useSx;