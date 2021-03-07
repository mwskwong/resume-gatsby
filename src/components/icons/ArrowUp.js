import { SvgIcon } from "@material-ui/core";
import { memo } from "react";

const ArrowUp = props => (
  <SvgIcon {...props}>
    <path d="M23.146 17.853l-10-9.988c-.417-.418.19-1.19.708-.707l10 9.99c.447.446-.26 1.153-.708.705zm-23-.707l11-11c.44-.44 1.163.25.707.708l-11 11c-.47.47-1.152-.262-.706-.708z" />
  </SvgIcon>
);

ArrowUp.muiName = SvgIcon.muiName;
ArrowUp.whyDidYouRender = true;

export default memo(ArrowUp);
