import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeSearch from '../components/header/HomeSearch'

import Navbar from '../components/header/Navbar'
import HotelsNearYou from '../components/HotelsNearYou'

const useStyles = makeStyles(theme => ({
  h3Style: {
    marginLeft: 110,
    fontSize: 27,
    marginBottom: 10,
    paddingTop: 100
  },
}))

const Hotels = () => {
  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <h3 className={classes.h3Style}>Tìm khách sạn</h3>
      <HomeSearch />
      <HotelsNearYou />
    </div>
  )
}

export default Hotels
