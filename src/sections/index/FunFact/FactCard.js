import { Card, CardContent, Typography } from "@material-ui/core";
import { memo, useEffect, useRef } from "react";

import { CountUp } from "countup.js";
import PropTypes from "prop-types";
import { isPercentage } from "utils";
import useSx from "./useFactCardSx";

const defaultValue = {
  number: 0,
  percentage: "0%"
};

const FactCard = ({ Icon, title, value = 0, startCountUp = false }) => {
  const sx = useSx();
  const countUpRef = useRef();

  useEffect(() => {
    if (startCountUp) {
      const countUp = new CountUp(
        countUpRef.current,
        parseInt(value, 10),
        {
          duration: 3,
          suffix: isPercentage(value) ? "%" : ""
        }
      );

      countUp.start();
    }
  }, [startCountUp, value]);

  return (
    <Card sx={sx.root} variant="outlined">
      <CardContent sx={sx.cardContent}>
        <Icon sx={sx.icon} />
        <Typography ref={countUpRef} sx={sx.value} variant="h3">
          {isPercentage(value) ? defaultValue.percentage : defaultValue.number}
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
  ]).isRequired,
  startCountUp: PropTypes.bool
};

FactCard.whyDidYouRender = true;

export default memo(FactCard);