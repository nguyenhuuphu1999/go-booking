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
    height: 125,
    width: 184,
    borderRadius: 41,
  },
});
function FamousPlace({ famousPlace: {image_url, address} }) {
  const classes = useStyles();

  return (
    
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image_url}
        title="Contemplative Reptile"
      />
      <Typography gutterBottom align="center" component="h2">
        {address}
      </Typography>
    </CardActionArea>
  );
}

export default FamousPlace;
