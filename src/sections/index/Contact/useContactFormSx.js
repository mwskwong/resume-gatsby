import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  submitButton: {
    float: "right",
    mt: 2
  }
}), []);

export default useSx;