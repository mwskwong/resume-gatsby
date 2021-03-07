import { Skeleton } from "@material-ui/core";
import { memo } from "react";
import useSx from "./useLanguageFallbackSx";

const LanguagesFallback = () => {
  const sx = useSx();

  return <Skeleton sx={sx.root} variant="rectangular" />;
};

LanguagesFallback.whyDidYouRender = true;

export default memo(LanguagesFallback);