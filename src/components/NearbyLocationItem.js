import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 288,
    maxHeight: 345,
  },
  media: {
    height: 220,
    width: 288,
    borderRadius: 41,
  },
});
function NearbyLocationItem({ nearbyLocationItem: { description, image_url, address, price } }) {
  const classes = useStyles();

  return (
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url}
        title="Contemplative Reptile"
      />
      <Typography gutterBottom align="center" component="h2">
        {description}
      </Typography>
      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {address}
      </Typography>
    </CardActionArea>
  );
}

export default NearbyLocationItem;
