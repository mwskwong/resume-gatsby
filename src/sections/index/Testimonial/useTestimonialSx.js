import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    position: "relative"
  },
  carouselContainer: {
    minHeight: 350
  }
}), []);

export default useSx;