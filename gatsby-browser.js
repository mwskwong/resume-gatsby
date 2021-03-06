import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import ThemeProvider from "src/components/ThemeProvider";
import store from "src/store";
import { swUpdateReady } from "src/actions";

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
  </ThemeProvider>
);

export const onServiceWorkerUpdateReady = () => {
  console.log("This application has been updated. Pending reload.");
  store.dispatch(swUpdateReady());
};