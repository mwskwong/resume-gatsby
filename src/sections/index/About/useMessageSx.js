import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 3,
    pt: 3
  },
  hello: {
    textAlign: "center",
    color: "text.primary"
  },
  occupationContainer: {
    display: "flex",
    alignItems: "center",
    mb: 1,
    "@media (max-width: 355px)": {
      flexDirection: "column"
    }
  },
  dot: {
    mx: 2,
    height: 4,
    width: 4,
    borderRadius: "2px",
    bgcolor: "text.secondary"
  },
  occupation: {
    fontWeight: 400,
    color: "text.secondary"
  },
  intro: {
    textAlign: "center",
    maxWidth: 850,
    color: "text.secondary"
  }
}), []);

export default useSx;