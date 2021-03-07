import { hydrate, render } from "react-dom";

import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import SwSnackbar from "components/SwSnackbar";
import ThemeProvider from "components/ThemeProvider";
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

export const onServiceWorkerUpdateReady = () => {
  console.log("This application has been updated. Pending reload.");
  store.dispatch(swUpdateReady());
};

export const replaceHydrateFunction = (_, { useHydrate }) => (element, container, callback) => {
  loadableReady(() => {
    if (useHydrate && !process.env.GATSBY_BUILD_STAGE.includes("develop")) {
      render(element, container, callback);
    } else {
      hydrate(element, container, callback);
    }
  });
};