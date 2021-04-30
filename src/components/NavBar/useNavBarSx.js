import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  toolbar: {
    maxWidth: 1440,
    width: "100%",
    mx: "auto"
  },
  spacer: {
    flex: 1
  },
  navList: {
    bgcolor: "background.paper"
  }
}), []);

export default useSx;