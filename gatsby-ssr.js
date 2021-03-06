import { CssBaseline } from "@material-ui/core";
import ThemeProvider from "src/components/ThemeProvider";

export const wrapPageElement = ({ element }) => (
  <ThemeProvider>
    <CssBaseline />
    {element}
  </ThemeProvider>
);