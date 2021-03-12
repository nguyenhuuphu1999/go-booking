import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Divider from '@material-ui/core/Divider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import './PopupLoginNavbar.css'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import Modal from '@material-ui/core/Modal'
import Login from '../Login'
import Register from '../Register_user_thuong'

import Backdrop from '@material-ui/core/Backdrop'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))
const PopupLoginNavbar = () => {
  const classes = useStyles()

  const [hiddenLogin, setHiddenLogin] = useState(false)
  // login
  const handlOnclickLogin = () => {
    const token = localStorage.getItem('keyToken_user_thuong')
    console.log(token)
    if (token == null || typeof token == 'undefined') {
      setHiddenLogin(true)
    } else {
      axios
        .post(
          process.env.REACT_APP_API_URL + '/login/login_user?type=user',
          {
            "email": "hoangminhhai@gmail.com",
            "passwd":"0"
        },
          { headers: {  'Authorization': `Basic ${token}`  } },
        )
        .then(res => {
          console.log(res)

          // if (res.data.err == false) {
          //   setLoginSuccessfull(true)
          // } else {
          //   setErr(true)
          // }
        })

        .catch(err => {
          console.error(err)
        })
    }
  }
  const handlOnclickHiddenLogin = () => {
    setHiddenLogin(false)
  }
  //end login
  ///register
  const [hiddenRegister, setHiddenRegister] = useState(false)
  const handlOnclickRegister = () => {
    setHiddenRegister(true)
  }
  const handlOnclickHiddenRegister = () => {
    setHiddenRegister(false)
  }
  //end register
  const handlOnclickLogout = () => {}

  return (
    <div>
      <List className={classes.root}>
        <Link to="#">
          <ListItem>
            <ListItemText secondary="Đăng nhập" onClick={handlOnclickLogin} />
          </ListItem>
        </Link>

        <Link to="#">
          <ListItem>
            <ListItemText secondary="Đăng ký" onClick={handlOnclickRegister} />
          </ListItem>
        </Link>

        <Link to="#">
          <ListItem>
            <ListItemText
              secondary="Trở thành chủ nhà"
              onClick={handlOnclickLogout}
            />
          </ListItem>
        </Link>
        <Link to="#">
          <ListItem>
            <ListItemText secondary="Trợ giúp" onClick={handlOnclickLogout} />
          </ListItem>
        </Link>
      </List>

      {/* modal login*/}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={hiddenLogin}
        onClose={handlOnclickHiddenLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Login />
      </Modal>

      {/*end modal login */}
      {/* modal Register*/}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={hiddenRegister}
        onClose={handlOnclickHiddenRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Register />
      </Modal>

      {/*end modal Register */}
    </div>
  )
}

export default PopupLoginNavbar
