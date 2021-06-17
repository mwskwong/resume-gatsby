import { Fragment, StrictMode } from "react";

import { CssBaseline } from "@material-ui/core";
import PWASnackbar from "components/PWASnackbar";
import { Provider } from "react-redux";
import ThemeProvider from "components/ThemeProvider";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import store from "store";
import { updateReady } from "slices/swUpdateReady";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <Fragment>
    {element}
    <PWASnackbar />
  </Fragment>
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
  try {
    store.dispatch(updateReady());
  } catch {
    window.location.reload();
  }
};


export const replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    hydrate(element, container, callback);
  });
};