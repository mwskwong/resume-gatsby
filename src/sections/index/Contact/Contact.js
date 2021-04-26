import { Box, Container, Grid } from "@material-ui/core";

import ContactFormFallback from "./ContactFormFallback";
import { HexagonSlice6 } from "mdi-material-ui";
import PersonalInfoFallback from "./PersonalInfoFallback";
import SectionHeader from "components/SectionHeader";
import constants from "contents/constants";
import loadable from "@loadable/component";
import { memo } from "react";
import nav from "contents/nav";
import { useInView } from "react-intersection-observer";
import useSx from "./useContactSx";

const contactFormFallback = <ContactFormFallback />;
const personalInfoFallback = <PersonalInfoFallback />;

const ContactForm = loadable(() => import(/* webpackPrefetch: true */ "./ContactForm"), {
  fallback: contactFormFallback
});
const PersonalInfo = loadable(() => import(/* webpackPrefetch: true */ "./PersonalInfo"), {
  fallback: personalInfoFallback
});

const Contact = () => {
  const sx = useSx();

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Container component="section" id={nav.contact.id}>
      <SectionHeader
        heading={constants.getInTouch}
        Icon={HexagonSlice6}
      />
      <Box ref={ref} sx={sx.gridContainer}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            {inView ? <PersonalInfo /> : personalInfoFallback}
          </Grid>
          <Grid item md xs={12}>
            {inView ? <ContactForm /> : contactFormFallback}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Contact.whyDidYouRender = true;

export default memo(Contact);