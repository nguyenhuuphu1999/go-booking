import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  stylesGrid: {
    flexGrow: 1,
  },
  button1: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    marginLeft: 60,
  },
  button2: {
    border: '1px solid orange',
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    marginLeft: 60,
  },
  button3: {
    background: '#3FAADF',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    marginLeft: 60,

  },
  imgStyle: {
    borderRadius: 30
  }
})

const Coupon = () => {
  const classes = useStyles()
  return (
    <div className={classes.stylesGrid}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <img className={classes.imgStyle}src="https://s3-alpha-sig.figma.com/img/dada/cdbb/eaeb6fd3a399a65ea4308aeca34ac861?Expires=1610928000&Signature=J6MHNkOKuJgB-nE4ucEgwQpzuneOI00tM6uDd2pS7ZIsYqj7aV61Xtyp4EnvwZouevQAWygutmgPauMz5ZQvs9WaDmwafwR30JfSjc9pTrH~dJAfv4q7HNoFgUvP4kbUiLpwWFk9dJZtdYfHftW4FCQFGZBZ4aYg6cGJngbQPzDiykaLTGi-4NMHROVgnX-agy~mQ1wYnC20bU3aU4Pgq49WSY8cdNXBDCL-EcSftwKTQYifkMmMU3Z0DZ5BLVCvRmZoVgxac770mNQzHVNSzvEr0LBkvGs8T9QHydZnQcLK8I2i5j3WSnthXoPtgP~7aPlmTEd7E7T2QcgkLT8aKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        </Grid>
        <Grid item xs={6}>
          <Button className={classes.button1}>Giảm giá 15%</Button>
          <Button className={classes.button2}>Còn 6 ngày</Button>
          <Button className={classes.button3}>Nhận voucher </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Coupon
