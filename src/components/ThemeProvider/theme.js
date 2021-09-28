import "@fontsource/rubik/latin-300.css";
import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-700.css";
import "./azonix.css";

import { alpha, createTheme, responsiveFontSizes } from "@mui/material";

const initTheme = createTheme();

const createCustomTheme = mode => responsiveFontSizes(createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        position: "fixed",
        variant: "outlined",
        elevation: 0
      },
      styleOverrides: {
        root: {
          transition: initTheme.transitions.create(
            ["background-color", "border-top-color"],
            { duration: initTheme.transitions.duration.short }
          ),
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        color: mode === "light" ? "primary" : "secondary",
        disableElevation: true
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          background: "rgba(166, 175, 189, .3)"
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto"
          }
        },
        section: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: "48px"
          },
          [`@media (min-width: ${initTheme.breakpoints.values.xs}px)`]: {
            scrollMarginTop: "64px"
          },
          scrollMarginTop: "56px",
          paddingTop: initTheme.spacing(10),
          paddingBottom: initTheme.spacing(10)
        },
        ".Typewriter__cursor": {
          fontWeight: initTheme.typography.h2.fontWeight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: mode === "dark" ? alpha("#ffffff", .36) : undefined
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: initTheme.shape.borderRadius
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: mode === "dark" ? "#fff" : undefined
      }
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiTimelineItem: {
      styleOverrides: {
        positionRight: {
          "&.MuiTimelineItem-missingOppositeContent": {
            "&::before": {
              display: "none"
            }
          },
          "& > .MuiTimelineContent-positionRight": {
            paddingRight: 0
          }
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          width: "100%",
          maxWidth: 1440,
          marginRight: "auto",
          marginLeft: "auto"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: "72px"
          },
          [`@media (min-width: ${initTheme.breakpoints.values.xs}px)`]: {
            scrollMarginTop: "88px"
          },
          scrollMarginTop: "80px"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#ffffff"
    },
    text: {
      primary: mode === "light" ? "#212121" : "#fff"
    },
    mode
  },
  typography: {
    fontFamily: "\"Rubik\", sans-serif",
    button: {
      textTransform: "capitalize"
    }
  }
}));

export const lightTheme = createCustomTheme("light");
export const darkTheme = createCustomTheme("dark");