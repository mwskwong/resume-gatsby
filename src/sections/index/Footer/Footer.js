import { Container, Divider, Grid } from "@material-ui/core";

import CopyrightStatement from "./CopyrightStatement";
import LazyHydrate from "react-lazy-hydration";
import SocialMedia from "components/SocialMedia";
import { memo } from "react";
import useSx from "./useFooterSx";

const Footer = () => {
  const sx = useSx();

  return (
    <LazyHydrate whenVisible>
      <footer>
        <Divider variant="middle" />
        <Container>
          <Grid sx={sx.gridContainer} container>
            <Grid item sm="auto" xs={12}>
              <CopyrightStatement />
            </Grid>
            <Grid item sm="auto" xs={12}>
              <SocialMedia />
            </Grid>
          </Grid>
        </Container>
      </footer>
    </LazyHydrate>
  );
};

Footer.whyDidYouRender = true;

export default memo(Footer);