import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Mobile = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d="M7.5 5h9c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-9c-.277 0-.5.223-.5.5s.223.5.5.5zm3-2h3c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-3c-.277 0-.5.223-.5.5s.223.5.5.5zm-3 16h9c.277 0 .5.223.5.5s-.223.5-.5.5h-9c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm3 2h3c.277 0 .5.223.5.5s-.223.5-.5.5h-3c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-4-21C5.678 0 5 .678 5 1.5v21c0 .822.678 1.5 1.5 1.5h11c.822 0 1.5-.678 1.5-1.5v-21c0-.822-.678-1.5-1.5-1.5h-11zm0 1h11c.286 0 .5.214.5.5v21c0 .286-.214.5-.5.5h-11c-.286 0-.5-.214-.5-.5v-21c0-.286.214-.5.5-.5z" opacity=".99" />
    </SvgIcon>
  );
};

Mobile.muiName = SvgIcon.muiName;
Mobile.whyDidYouRender = true;

export default Mobile;
