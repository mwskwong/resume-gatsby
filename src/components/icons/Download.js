import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const Download = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d="M12.146 22.854c.195.195.51.195.706 0l2.997-2.996c.483-.47-.237-1.19-.707-.706L12.5 21.795l-2.643-2.642c-.47-.484-1.19.236-.705.706zM12.5 20c-.277 0-.5-.223-.5-.5v-5c0-.276.223-.5.5-.5s.5.224.5.5v5c0 .277-.223.5-.5.5zm.824-18.998c-1.276-.03-2.558.253-3.705.822-1.442.716-2.612 1.766-3.383 3.178-1.646-.067-3.3.637-4.47 1.8C.516 8.044-.138 9.834.023 11.59c.127 1.387.753 2.713 1.742 3.696C2.756 16.268 4.1 17 5.48 17H6.5c.277 0 .5-.223.5-.5s-.223-.5-.5-.5h-.95c-1.147-.098-2.265-.615-3.08-1.425-.82-.813-1.345-1.93-1.45-3.076-.132-1.446.42-2.964 1.45-3.987C3.5 6.49 5.02 5.86 6.464 6c.207.02.404-.06.496-.247.663-1.328 1.775-2.374 3.105-3.034.997-.496 2.12-.743 3.236-.718.372.008.745.05 1.11.12 1.66.312 3.203 1.268 4.22 2.616 1.02 1.347 1.517 3.08 1.364 4.763-.023.256.15.45.4.5.765.152 1.483.65 1.953 1.272.47.623.707 1.436.643 2.213-.033.4-.145.79-.332 1.133-.186.34-.452.638-.77.857-.318.22-.697.367-1.095.443-.4.076-.83.082-1.293.082h-1c-.277 0-.5.223-.5.5s.223.5.5.5h1c.47 0 .964-.003 1.48-.1.517-.1 1.025-.29 1.475-.6.45-.31.82-.725 1.082-1.202.26-.476.405-1.002.45-1.53.084-1.03-.22-2.073-.843-2.897C22.6 9.953 21.86 9.47 21 9.215c.07-1.81-.48-3.63-1.572-5.078-1.173-1.552-2.923-2.638-4.834-3-.42-.078-.844-.124-1.27-.134z" />
    </SvgIcon>
  );
};

Download.muiName = SvgIcon.muiName;
Download.whyDidYouRender = true;

export default Download;