import { Box, LinearProgress, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import useSx from "./useSkillRatingSx";

const SkillRating = ({ name, rating }) => {
  const sx = useSx();

  return (
    <Box sx={sx.root}>
      <Box sx={sx.ratingContainer}>
        <Typography sx={sx.skillName}>
          {name}
        </Typography>
        <Typography sx={sx.ratingText}>
          {Math.round(rating) + "%"}
        </Typography>
      </Box>
      <LinearProgress
        sx={sx.rating}
        variant='determinate'
        color='primary'
        value={rating}
      />
    </Box>
  );
};

SkillRating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default SkillRating;
