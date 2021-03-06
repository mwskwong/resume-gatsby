import { useMemo } from "react";

const useSx = ({ active }) => useMemo(() => ({
  textPrimary: {
    typography: "button",
    color: active ? "text.primary" : "text.secondary"
  }
}), [active]);

export default useSx;