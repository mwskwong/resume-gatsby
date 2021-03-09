import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative",
    bgcolor: "#818fa0"
  },
  carouselContainer: {
    minHeight: 350
  }
}), []);

export default useSx;