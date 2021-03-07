import { Box, Typography } from "@material-ui/core";
import { useEffect, useRef } from "react";

import Typewriter from "typewriter-effect/dist/core";
import constants from "contents/constants";
import data from "contents/data";
import useSx from "./useTitleSx";

const Title = () => {
  const sx = useSx();
  const typewriterRef = useRef();

  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: [
        `${data.firstName} ${data.lastName}.`,
        ...data.occupations.map(occupation => `a ${occupation}.`)
      ],
      loop: true,
      autoStart: true
    });
  }, []);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={sx.greetings} variant="h5" gutterBottom>
        {constants.greetings}
      </Typography>
      <Typography sx={sx.title} variant="h2">
        {`${constants.iAm} `}
        <Box component="span" ref={typewriterRef} sx={sx.importantText} />
      </Typography>
    </Box>
  );
};

Title.whyDidYouRender = true;

export default Title;