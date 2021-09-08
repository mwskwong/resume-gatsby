import { Box, Container, Grid } from "@mui/material";

import ContactForm from "./ContactForm";
import HexSlice6 from "components/icons/HexSlice6";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import { memo } from "react";
import nav from "contents/nav";
import useSx from "./useContactSx";

const Contact = () => {
  const sx = useSx();

  return (
    <Container component="section" id={nav.contact.id}>
      <SectionHeader
        heading={constants.getInTouch}
        Icon={HexSlice6}
      />
      <Box sx={sx.gridContainer}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <PersonalInfo />
          </Grid>
          <Grid item md xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Contact.whyDidYouRender = true;

export default memo(Contact);