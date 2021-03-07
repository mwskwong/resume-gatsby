import { Box, Grid } from "@material-ui/core";

import SkillRating from "./SkillRating";
import data from "contents/data";
import useSx from "./useSkillSetSx";

const SkillSet = () => {
  const sx = useSx();
  const mid = Math.ceil(data.about.skills.length / 2);

  return (
    <Box sx={sx.root}>
      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          {data.about.skills.slice(0, mid).map(({ name, rating }) => (
            <SkillRating
              key={name}
              name={name}
              rating={rating}
            />
          ))}
        </Grid>
        <Grid item sm={6} xs={12}>
          {data.about.skills.slice(-mid).map(({ name, rating }) => (
            <SkillRating
              key={name}
              name={name}
              rating={rating}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillSet;