import { CssBaseline } from "@material-ui/core";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import SwSnackbar from "components/SwSnackbar";
import ThemeProvider from "components/ThemeProvider";
import store from "store";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        {element}
      </ParallaxProvider>
    </Provider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <CssBaseline />
    {element}
    <SwSnackbar />
  </ThemeProvider>
);