import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Hotel from '../homepage_component/NearbyLocationItem'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 63,
  },
}))

export default function Hotels({ hotels }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Khách sạn gần bạn</h3>
      <Grid container spacing={3} align="center">
        {hotels.map(hotel => (
          <Grid item xs={12} sm={6} md={3}>
            <Link to={`/detail/${hotel.id}`}>
              <Hotel {...hotel} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
