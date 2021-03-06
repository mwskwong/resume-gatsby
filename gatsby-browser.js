import { CssBaseline } from "@material-ui/core";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import ThemeProvider from "src/components/ThemeProvider";
import store from "src/store";
import { swUpdateReady } from "src/actions";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {element}
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <Fragment>
    <CssBaseline />
    {element}
  </Fragment>
);

export const onServiceWorkerUpdateReady = () => {
  console.log("This application has been updated. Pending reload.");
  store.dispatch(swUpdateReady());
};