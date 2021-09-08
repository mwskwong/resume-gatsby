import { Card, CardContent, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useFactCardSx";

const FactCard = ({ Icon, title, value = 0 }) => {
  const sx = useSx();

  return (
    <Card sx={sx.root} variant="outlined">
      <CardContent sx={sx.cardContent}>
        <Icon sx={sx.icon} />
        <Typography sx={sx.value} variant="h3">
          {value}
        </Typography>
        <Typography sx={sx.title} variant="body2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

FactCard.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

FactCard.whyDidYouRender = true;

export default memo(FactCard);