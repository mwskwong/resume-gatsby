import ExpTimelineItem from "./ExpTimelineItem";
import PropTypes from "prop-types";
import { Timeline } from "@material-ui/lab";
import { useMediaQuery } from "@material-ui/core";

const ExpTimeline = ({ data = [] }) => {
  const mdDown = useMediaQuery(theme => theme.breakpoints.down("md"));

  return (
    <Timeline position={mdDown ? "right" : "alternate"}>
      {data.map(({ period, title, subheader, description, file }, idx) => (
        <ExpTimelineItem
          key={idx}
          period={period}
          title={title}
          subheader={subheader}
          description={description}
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