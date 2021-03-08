import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 3,
    pt: 6,
    pb: 3
  },
  userIcon: {
    width: 60,
    height: 60
  },
  name: {
    mt: 3,
    width: 140
  },
  company: {
    width: 210
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 3,
    fontSize: 18,
    width: "100%",
    maxWidth: 580
  },
  comments: [
    {
      width: "100%"
    },
    {
      width: "90%"
    },
    {
      width: "85%"
    },
    {
      width: "30%"
    }
  ]

}), []);

export default useSx;