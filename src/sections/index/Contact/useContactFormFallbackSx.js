import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  textField: {
    height: 56
  },
  textArea: {
    height: 240
  },
  submitButton: {
    float: "right",
    width: 147,
    height: 42,
    mt: 2
  }
}), []);

export default useSx;