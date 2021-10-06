import { Fragment, StrictMode } from "react";

import { CssBaseline } from "@mui/material";
import PWASnackbar from "components/PWASnackbar";
import { Provider } from "react-redux";
import ThemeProvider from "components/ThemeProvider";
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
      trackAllPureComponents: true
    });
  }
};

export const onServiceWorkerUpdateReady = () => {
  console.log("This application has been updated. Pending reload.");
  store.dispatch(updateReady());
};