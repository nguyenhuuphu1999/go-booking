import React from 'react'
import Apartment from './Apartment'
import { apartmentList } from '../FakeData/data'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 122,
  },
}))

export default function ApartmentList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} align="center">
        {apartmentList.map(apartment => (
          <Grid item xs={12} md={3}>
            <Apartment {...apartment} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
