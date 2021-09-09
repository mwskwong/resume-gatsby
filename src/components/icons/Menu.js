import { SvgIcon } from "@mui/material";
import { memo } from "react";
import useSx from "./useThirdPartyIconSx";

const Menu = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d="m 0.5,19 23,0 c 0.277,0 0.5,0.223 0.5,0.5 0,0.277 -0.223,0.5 -0.5,0.5 l -23,0 C 0.223,20 0,19.777 0,19.5 0,19.223 0.223,19 0.5,19 Z m 0,-8 23,0 c 0.277,0 0.5,0.223 0.5,0.5 0,0.277 -0.223,0.5 -0.5,0.5 l -23,0 C 0.223,12 0,11.777 0,11.5 0,11.223 0.223,11 0.5,11 Z m 0,-8 23,0 C 23.777,3 24,3.223 24,3.5 24,3.777 23.777,4 23.5,4 L 0.5,4 C 0.223,4 0,3.777 0,3.5 0,3.223 0.223,3 0.5,3 Z" />
    </SvgIcon>
  );
};

Menu.muiName = SvgIcon.muiName;
Menu.whyDidYouRender = true;

export default memo(Menu);
