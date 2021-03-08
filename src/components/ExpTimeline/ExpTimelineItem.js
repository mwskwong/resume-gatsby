import { Card, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@material-ui/lab";

import Download from "components/icons/Download";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useExpTimelineItemSx";

const ExpTimelineItem = ({ period, title, subheader, description, file = "#" }) => {
  const sx = useSx();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card sx={sx.card} variant="outlined">
          <CardContent>
            <Typography sx={sx.period} gutterBottom noWrap>
              {period}
            </Typography>
            <Typography variant="h6">
              {title}
            </Typography>
            <Typography sx={sx.subheader}>
              {subheader}
            </Typography>
            <Typography sx={sx.description} variant="body2">
              {description}
            </Typography>
          </CardContent>
          {
            file
              ? (
                <CardActions disableSpacing>
                  <IconButton
                    sx={sx.downloadButton}
                    aria-label="show more"
                    href={file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download />
                  </IconButton>
                </CardActions>
              )
              : null
          }
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

ExpTimelineItem.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  description: PropTypes.string,
  file: PropTypes.string
};

ExpTimelineItem.whyDidYouRender = true;

export default memo(ExpTimelineItem);