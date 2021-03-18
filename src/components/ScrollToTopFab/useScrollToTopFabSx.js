import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  fab: {
    position: "fixed",
    bottom: theme => `calc(env(safe-area-inset-bottom) + ${theme.spacing(2)})`,
    right: theme => theme.spacing(2)
  },
  icon: {
    fontSize: 14
  }
}), []);

export default useSx;