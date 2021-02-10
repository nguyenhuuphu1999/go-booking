import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

import User from '../../img/person-circle-sharp.svg'

const useStyles = makeStyles(() => ({
    root: {
      top: '75px'
    } 
  }))

export default function UserIcon() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const classes = useStyles()


  const logo = {
    width: '50px',
    height: '50px',
  }

  return (
    <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}>
          <i style={{ marginLeft: '30px' }}>
            <img style={logo} src={User} alt="" />
          </i>
        </Button>
        <Menu classes={{root: classes.root}}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={handleClose}>Đăng ký</MenuItem>
          <MenuItem onClick={handleClose}>Đăng nhập</MenuItem>
          <MenuItem onClick={handleClose}>
            Đăng nhập với tư cách chủ nhà
          </MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Trợ giúp</MenuItem>
        </Menu>
    </div>
  )
}
