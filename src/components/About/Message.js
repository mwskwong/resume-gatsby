import { Box, Typography } from "@material-ui/core";

import { CircleSmall } from "mdi-material-ui";
import { Fragment } from "react";
import constants from "contents/constants";
import data from "contents/data";
import useSx from "./useMessageSx";

const Message = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Typography sx={sx.hello} variant='h5' component='h1' gutterBottom>
        {constants.helloPrefix}
        {data.firstName + " " + data.lastName}
        {constants.helloSuffix}
      </Typography>
      <Box sx={sx.occupationContainer}>
        {data.occupations.map((occupation, index) => (
          <Fragment key={occupation}>
            {index !== 0 && <CircleSmall sx={sx.dot} />}
            <Typography sx={sx.occupation} variant='h6' component='h2'>
              {occupation}
            </Typography>
          </Fragment>
        ))}
      </Box>
      <Typography sx={sx.intro}>
        {data.about.intro}
      </Typography>
    </Box>
  );
};

export default Message;