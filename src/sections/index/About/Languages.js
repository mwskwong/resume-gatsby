import { Box, useTheme } from "@material-ui/core";

import { Radar } from "@nivo/radar";
import data from "contents/data";
import useSx from "./useLanguageSx";

const Languages = () => {
  const sx = useSx();
  const theme = useTheme();
  const keys = ["rating"];
  const margin = { top: 24, right: 50, bottom: 0, left: 50 };
  const nivoTheme = {
    fontFamily: theme.typography.fontFamily,
    textColor: theme.palette.text.primary
  };

  return (
    <Box sx={sx.root}>
      <Radar
        width={378}
        height={300}
        data={data.about.languages}
        indexBy="name"
        keys={keys}
        colors={theme.palette.primary.main}
        animate={false}
        isInteractive={false}
        enableDots={false}
        borderWidth={0}
        fillOpacity={1}
        margin={margin}
        theme={nivoTheme}
      />
    </Box>
  );
};

Languages.whyDidYouRender = true;

export default Languages;