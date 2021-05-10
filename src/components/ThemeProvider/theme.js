import "@fontsource/rubik/latin-300.css";
import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-700.css";
import "styles/azonix.css";

import { alpha, createTheme, responsiveFontSizes } from "@material-ui/core";

const initTheme = createTheme();

const createCustomTheme = mode => responsiveFontSizes(createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
        position: "fixed"
      },
      styleOverrides: {
        root: {
          paddingTop: "env(safe-area-inset-top)"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        color: mode === "light" ? "primary" : "secondary",
        disableElevation: true
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fbfbfc"
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          background: "rgba(166, 175, 189, .3)"
        },
        footer: {
          paddingBottom: "env(safe-area-inset-bottom)"
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
          "@media (min-width: 600px)": {
            scrollMarginTop: "64px"
          },
          scrollMarginTop: "56px",
          paddingTop: initTheme.spacing(10),
          paddingBottom: initTheme.spacing(10),
          "&::before": {
            backgroundAttachment: "fixed",
            "@supports (-webkit-touch-callout: inherit)": {
              backgroundAttachment: "scroll"
            }
          },
          "&::after": {
            backgroundAttachment: "fixed",
            "@supports (-webkit-touch-callout: inherit)": {
              backgroundAttachment: "scroll"
            }
          }
        },
        input: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: 48 + parseInt(initTheme.spacing(3)) + "px"
          },
          "@media (min-width: 600px)": {
            scrollMarginTop: 64 + parseInt(initTheme.spacing(3)) + "px"
          },
          scrollMarginTop: 56 + parseInt(initTheme.spacing(3)) + "px"
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
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e3440"
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
    }
  },
  palette: {
    primary: {
      main: "#2e3440"
    },
    secondary: {
      main: "#ffffff"
    },
    text: {
      primary: mode === "light" ? "#2e3440" : "#fff"
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