import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  text: {
    fontFamily: "\"Azonix\", sans-serif"
  }
}), []);

export default useSx;