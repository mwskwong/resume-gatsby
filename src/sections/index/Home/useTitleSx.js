import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  greetings: {
    textTransform: "capitalize",
    color: "text.primary"
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "text.primary",
    "@media (max-width: 520px)": {
      height: theme => `${theme.typography.h2.lineHeight * 2}em`
    },
    "@media (max-width: 300px)": {
      height: theme => `${theme.typography.h2.lineHeight * 3}em`
    }
  },
  importantText: {
    fontWeight: 400
  }
}), []);

export default useSx;