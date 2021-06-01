import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import SwSnackbar from "components/SwSnackbar";
import ThemeProvider from "components/ThemeProvider";
import path from "path";
import store from "store";

const statsFile = path.resolve("./public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile, entrypoints: [] });

export const wrapRootElement = ({ element }) => (
  <ChunkExtractorManager extractor={extractor}>
    <StrictMode>
      <Provider store={store}>
        {element}
      </Provider>
    </StrictMode>
  </ChunkExtractorManager>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <CssBaseline />
    {element}
    <SwSnackbar />
  </ThemeProvider>
);

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  // setHeadComponents(extractor.getLinkElements());
  setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()]);
  extractor.chunks = [];
};