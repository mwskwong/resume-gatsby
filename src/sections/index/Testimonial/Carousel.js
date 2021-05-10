import { Box } from "@material-ui/core";
import Endorsement from "./Endorsement";
import Pagination from "./Pagination";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import data from "contents/data";
import { useState } from "react";
import useSx from "./useCarouselSx";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = () => {
  const sx = useSx();
  const [index, setIndex] = useState(0);

  const handleChangeIndex = index => setIndex(index);

  return (
    <Box sx={sx.root}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        resistance
        interval={15000}
      >
        {data.testimonial.references.map(({ name, company, comment }) => (
          <Endorsement
            key={name}
            name={name}
            company={company}
            comment={comment}
          />
        ))}
      </AutoPlaySwipeableViews>
      <Pagination
        count={data.testimonial.references.length}
        index={index}
        onChangeIndex={handleChangeIndex}
      />
    </Box>
  );
};

Carousel.whyDidYouRender = true;

export default Carousel;