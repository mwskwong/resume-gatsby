import Email from "components/icons/Email";
import Location from "components/icons/Location";
import Mobile from "components/icons/Mobile";
import PersonalInfoItem from "./PersonalInfoItem";
import { Stack } from "@mui/material";
import constants from "contents/constants";
import data from "contents/data";
import useSx from "./usePersonalInfoSx";

const PersonalInfo = () => {
  const sx = useSx();
  return (
    <Stack spacing={3} sx={sx.root}>
      <PersonalInfoItem
        Icon={Mobile}
        title={constants.callMe}
        value={data.contact.phone}
      />
      <PersonalInfoItem
        Icon={Email}
        title={constants.emailMe}
        value={data.contact.email}
      />
      <PersonalInfoItem
        Icon={Location}
        title={constants.findMe}
        value={data.contact.address}
      />
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;