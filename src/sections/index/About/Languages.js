import { Box, useTheme } from "@material-ui/core";

import LazyHydrate from "react-lazy-hydration";
import { ResponsiveRadar } from "@nivo/radar";
import data from "contents/data";
import useSx from "./useLanguageSx";

const Languages = () => {
  const sx = useSx();
  const theme = useTheme();
  const keys = ["rating"];
  const margin = { top: 24, right: 50, bottom: 0, left: 50 };
  const lazyHydrateOptions = { rootMargin: "0px" };
  const nivoTheme = {
    fontFamily: theme.typography.fontFamily,
    textColor: theme.palette.text.primary
  };

  return (
    <LazyHydrate whenVisible={lazyHydrateOptions}>
      <Box sx={sx.root}>
        <ResponsiveRadar
          data={data.about.languages}
          indexBy="name"
          keys={keys}
          colors={theme.palette.primary.main}
          isInteractive={false}
          enableDots={false}
          borderWidth={0}
          fillOpacity={1}
          margin={margin}
          theme={nivoTheme}
        />
      </Box>
    </LazyHydrate>
  );
};

Languages.whyDidYouRender = true;

export default Languages;