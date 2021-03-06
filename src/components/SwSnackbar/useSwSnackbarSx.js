import { useMemo } from "react";
import { useTheme } from "@material-ui/core";

const useSx = ({ hasFab }) => {
  const theme = useTheme();
  return useMemo(() => ({
    root: {
      transition: theme => theme.transitions.create("bottom", {
        duration: theme.transitions.duration.standard
      }),
      [theme.breakpoints.down("sm")]: {
        bottom: hasFab ? 72 : undefined
      }
    }
  }), [hasFab, theme]);
};

export default useSx;