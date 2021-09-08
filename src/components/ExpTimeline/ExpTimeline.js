import ExpTimelineItem from "./ExpTimelineItem";
import PropTypes from "prop-types";
import { Timeline } from "@mui/lab";
import { useMediaQuery } from "@mui/material";
import useSx from "./useExpTimelineSx";

const ExpTimeline = ({ data = [] }) => {
  const sx = useSx();
  const mdDown = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Timeline sx={sx.root} position={mdDown ? "right" : "alternate"}>
      {data.map(({ period, title, subheader, details, file }, idx) => (
        <ExpTimelineItem
          key={idx}
          period={period}
          title={title}
          subheader={subheader}
          details={details}
          file={file}
        />
      ))}
    </Timeline>
  );
};

ExpTimeline.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    description: PropTypes.string,
    file: PropTypes.string
  }))
};

ExpTimeline.whyDidYouRender = true;

export default ExpTimeline;