import { Box, Typography } from "@material-ui/core";

import { Fragment } from "react";
import constants from "contents/constants";
import data from "contents/data";
import useSx from "./useCopyrightStatementSx";

const CopyrightStatement = () => {
  const sx = useSx();
  const prefix = constants.copyrightStatementPrefix;
  const year = new Date().getFullYear();
  const name = (
    <Fragment>
      <Box component="span" sx={sx.lastName}>
        {`${data.lastName}, `}
      </Box>
      {`${data.firstName} ${data.middleName}`}
    </Fragment>
  );
  const suffix = constants.copyrightStatementSuffix;

  return (
    <Typography sx={sx.root} variant="body2">
      {`${prefix} ${year} `}
      {name}
      {suffix}
    </Typography>
  );
};

CopyrightStatement.whyDidYouRender = true;

export default CopyrightStatement;