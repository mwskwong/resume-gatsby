import { Button, Container, Typography } from "@material-ui/core";

import { Link } from "gatsby";
import SEO from "components/SEO";
import constants from "contents/constants";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  noMatch: {
    fontFamily: "\"Azonix\",  sans-serif",
    textAlign: "center",
    mb: 4
  },
  noMatchMessage: {
    textAlign: "center",
    mb: 4
  }
}), []);

const NoMatch = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <SEO title={constants.pageNotFound} />
      <Typography variant="h1" sx={sx.noMatch}>
        {constants.noMatch}
      </Typography>
      <Typography variant="h5" sx={sx.noMatchMessage}>
        {constants.noMatchMessage}
      </Typography>
      <Button variant="contained" size="large" component={Link} to="/">
        {constants.goHome}
      </Button>
    </Container>
  );
};

export default NoMatch;
