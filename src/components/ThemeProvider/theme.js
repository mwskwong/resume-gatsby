import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/variable.css";
import "styles/azonix.css";

import { alpha, createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const initTheme = createMuiTheme();

const shadowKeyUmbraOpacity = 0.25;
const shadowKeyPenumbraOpacity = 0.18;
const shadowAmbientShadowOpacity = 0.1;
const createShadow = (...px) => {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(184, 194, 215,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(184, 194, 215,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(184, 194, 215,${shadowAmbientShadowOpacity})`
  ].join(",");
};


const shadows = [
  "none",
  createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
  createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
];

const createTheme = mode => responsiveFontSizes(createMuiTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
        position: "fixed"
      }
    },
    MuiButton: {
      defaultProps: {
        color: mode === "light" ? "primary" : "secondary"
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
    MuiTextField: {
      defaultProps: {
        variant: "outlined"
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
        alignLeft: {
          "&$missingOppositeContent": {
            "&::before": {
              flex: 0,
              padding: 0
            }
          }
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
    background: {
      default: "#fbfbfc",
      paper: "#ffffff"
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
  },
  shadows
}));

export const lightTheme = createTheme("light");
export const darkTheme = createTheme("dark");