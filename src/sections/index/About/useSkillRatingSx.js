import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  ratingContainer: {
    display: "flex"
  },
  skillName: {
    color: "text.primary",
    flexGrow: 1,
    fontWeight: "bold"
  },
  ratingText: {
    color: "text.secondary"
  },
  rating: {
    bgcolor: "#eceff4"
  }
}), []);

export default useSx;