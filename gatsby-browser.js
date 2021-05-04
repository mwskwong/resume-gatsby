import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import SwSnackbar from "components/SwSnackbar";
import ThemeProvider from "components/ThemeProvider";
import { unstable_createRoot as createRoot } from "react-dom";
import { loadableReady } from "@loadable/component";
import store from "store";
import { swUpdateReady } from "actions";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      {element}
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


export const replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback }
    }).render(element);
  });
};