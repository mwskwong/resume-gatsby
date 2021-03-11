import { CssBaseline } from "@material-ui/core";
import { ParallaxProvider } from "react-scroll-parallax";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import SwSnackbar from "components/SwSnackbar";
import ThemeProvider from "components/ThemeProvider";
import store from "store";
import { swUpdateReady } from "actions";

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

export const onClientEntry = () => {
  if (process.env.NODE_ENV === "development") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    const React = require("react");
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      exclude: [/RadarShapes/]
    });
  }
};

export const onServiceWorkerUpdateReady = () => {
  console.log("This application has been updated. Pending reload.");
  store.dispatch(swUpdateReady());
};