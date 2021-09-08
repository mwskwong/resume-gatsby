import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from "@mui/lab";

import Download from "components/icons/Download";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useExpTimelineItemSx";

const ExpTimelineItem = ({ period, title, subheader, details = [], file = "#" }) => {
  const sx = useSx();

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card variant="outlined">
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
            <List dense>
              {details.map((detail, index) => (
                <ListItem key={index} sx={sx.detailsListItem}>
                  <ListItemText primary={detail} />
                </ListItem>
              ))}
            </List>
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
  details: PropTypes.arrayOf(PropTypes.string),
  file: PropTypes.string
};

ExpTimelineItem.whyDidYouRender = true;

export default memo(ExpTimelineItem);