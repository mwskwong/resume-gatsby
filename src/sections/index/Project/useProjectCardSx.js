import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  card: {
    height: "100%"
  },
  cardMedia: {
    height: 222
  },
  title: {
    textAlign: "center"
  },
  date: {
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    color: "text.secondary"
  }
}), []);

export default useSx;