import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  spacer: {
    flex: 1
  },
  navList: {
    bgcolor: "background.paper"
  }
}), []);

export default useSx;