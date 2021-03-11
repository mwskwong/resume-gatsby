import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    py: 0
  },
  bgOverlay: {
    py: 10
  },
  carouselContainer: {
    minHeight: 350
  }
}), []);

export default useSx;