import { CssBaseline } from "@material-ui/core";
import { StrictMode } from "react";
import ThemeProvider from "components/ThemeProvider";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    {element}
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <CssBaseline />
    {element}
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
  window.location.reload();
};


export const replaceHydrateFunction = () => (element, container, callback) => {
  loadableReady(() => {
    hydrate(element, container, callback);
  });
};