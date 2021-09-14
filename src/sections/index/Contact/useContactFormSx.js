import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  submitButton: {
    float: "right",
    mt: 2,
    width: 175
  }
}), []);

export default useSx;