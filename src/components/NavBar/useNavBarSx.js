import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  logo: {
    marginRight: "auto"
  },
  navList: {
    bgcolor: "background.paper"
  }
}), []);

export default useSx;