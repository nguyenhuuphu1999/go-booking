import React from "react";
import Feedback from "./Feedback";
import { feedbackList } from "../FakeData/data";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 140,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 46,
  },
}));

export default function ApartmentList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Phản hồi tích cực</h3>
      <Grid container spacing={3} align="center" justify="space-around">
        {feedbackList.map((feedback) => (
          <Grid item xs={12} md={3}>
            <Feedback feedback={feedback} />
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
