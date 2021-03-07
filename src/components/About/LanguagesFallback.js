import { Skeleton } from "@material-ui/core";
import useSx from "./useLanguageFallbackSx";

const LanguagesFallback = () => {
  const sx = useSx();

  return <Skeleton sx={sx.root} variant='rectangular' />;
};

export default LanguagesFallback;