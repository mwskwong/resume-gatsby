import { Fragment, StrictMode } from "react";

import { CssBaseline } from "@material-ui/core";
import PWASnackbar from "components/PWASnackbar";
import { Provider } from "react-redux";
import ThemeProvider from "components/ThemeProvider";
import store from "store";

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