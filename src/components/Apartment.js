import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    maxHeight: 345,
  },
  media: {
    height: 160,
    width: 240,
    borderRadius: 41,
  },
});
function Apartment({ title, image_url, access_times }) {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url}
        title="Contemplative Reptile"
      />
      <Typography gutterBottom align="center" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {access_times}
      </Typography>
    </CardActionArea>
  );
}

export default Apartment;
