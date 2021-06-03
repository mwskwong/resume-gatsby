import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";

import { CssBaseline } from "@material-ui/core";
import { StrictMode } from "react";
import ThemeProvider from "components/ThemeProvider";
import path from "path";

const statsFile = path.resolve("./public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile, entrypoints: [] });

export const wrapRootElement = ({ element }) => (
  <ChunkExtractorManager extractor={extractor}>
    <StrictMode>
      {element}
    </StrictMode>
  </ChunkExtractorManager>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <CssBaseline />
    {element}
  </ThemeProvider>
);

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents(extractor.getLinkElements());
  setPostBodyComponents([...extractor.getScriptElements(), ...extractor.getStyleElements()]);
  extractor.chunks = [];
};