import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { Fragment, StrictMode } from "react";

import { CssBaseline } from "@material-ui/core";
import PWASnackbar from "components/PWASnackbar";
import { Provider } from "react-redux";
import ThemeProvider from "components/ThemeProvider";
import path from "path";
import store from "store";

const statsFile = path.resolve("./public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile, entrypoints: [] });

export const wrapRootElement = ({ element }) => (
  <ChunkExtractorManager extractor={extractor}>
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <CssBaseline />
          {element}
        </ThemeProvider>
      </Provider>
    </StrictMode>
  </ChunkExtractorManager>
);

export const wrapPageElement = ({ element }) => (
  <Fragment>
    {element}
    <PWASnackbar />
  </Fragment>
);

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents(extractor.getLinkElements());
  setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()]);
  extractor.chunks = [];
};