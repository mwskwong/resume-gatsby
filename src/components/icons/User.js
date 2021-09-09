import { SvgIcon } from "@mui/material";
import useSx from "./useThirdPartyIconSx";

const User = props => {
  const sx = useSx();

  return (
    <SvgIcon sx={sx.root} {...props}>
      <path d="M12 5C9.88 5 8 6.725 8 9v2c0 .1.03.195.084.277L9 12.652v1.565L4.242 17.07c-.15.09-.242.254-.242.43v1c0 .656 1 .668 1 0v-.717l4.758-2.853c.15-.09.242-.254.242-.43v-2c0-.1-.03-.195-.084-.277L9 10.848V9c0-1.725 1.42-3 3-3s3 1.275 3 3v1.848l-.916 1.375c-.055.082-.084.178-.084.277v2c0 .176.092.34.242.43L19 17.783v.717c0 .68 1 .64 1 0v-1c0-.176-.092-.34-.242-.43L15 14.217v-1.565l.916-1.375C15.97 11.195 16 11.1 16 11V9c0-2.275-1.88-4-4-4zm0-5C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm0 1c6.08 0 11 4.92 11 11s-4.92 11-11 11S1 18.08 1 12 5.92 1 12 1z" />
    </SvgIcon>
  );
};

User.muiName = SvgIcon.muiName;
User.whyDidYouRender = true;

export default User;