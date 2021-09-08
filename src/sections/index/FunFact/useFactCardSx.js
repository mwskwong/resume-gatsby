import { alpha } from "@mui/material";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    backgroundColor: "transparent",
    borderColor: alpha("#fff", .46),
    height: "100%"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  icon: {
    fontSize: 40,
    mb: 2
  },
  value: {
    color: "text.primary",
    mb: .5
  },
  title: {
    color: "text.secondary",
    textTransform: "capitalize"
  }
}), []);

export default useSx;