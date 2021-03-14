import React, { useEffect, useState } from 'react'

import houseIcon from '../../img/house.svg'
import lightIcon from '../../img/light.svg'
import book from '../../img/book-outline.svg'
import star from '../../img/star-outline.svg'
import calendar from '../../img/calendar.svg'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { Container, Fade, Grid, makeStyles } from '@material-ui/core'
import './Style.css'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined'
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'
import Button from '@material-ui/core/Button'
import 'react-datepicker/dist/react-datepicker.css'
// import 'react-calendar/dist/Calendar.css'
import format from 'date-format'
import axios from 'axios'
import { useParams } from 'react-router'
import DatePicker from 'react-datepicker'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Alert from '@material-ui/lab/Alert'
const itemList = [
  {
    iconUrl: <HomeOutlinedIcon />,
    title: 'Toàn bộ ngôi nhà',
    description: 'Anh sẽ có căn hộ cho riêng mình.',
  },
  {
    iconUrl: <WbSunnyOutlinedIcon />,
    title: 'Nâng cao sạch',
    description:
      'Máy chủ này cam kết quá trình làm sạch nâng cao 5 bước của GO. Tìm hiểu thêm',
  },
  {
    iconUrl: <ImportContactsOutlinedIcon />,
    title: 'Quy tắc nhà ở',
    description:
      'Chủ nhà không cho phép vật nuôi, tiệc tùng hoặc hút thuốc. Nhận thông tin chi tiết',
  },
  {
    iconUrl: <StarBorderOutlinedIcon />,
    title: 'Chủ nhà giàu kinh nghiệm',
    description: ' Có 120 đánh giá từ những nơi khác.',
  },
  {
    iconUrl: <EventAvailableOutlinedIcon />,
    title: 'Chính sách hủy đặt phòng',
    description:
      'Thêm ngày chuyến đi của bạn để biết chi tiết hủy đặt phòng cho kỳ nghỉ này.',
  },
]

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Policies = () => {
  const param = useParams()
  const styles = {
    width: '100%',
    margin: '0 auto',
    borderBottom: '2px solid gray',
    borderLeft: '0.5px solid gray',
    borderRight: '0.5px solid gray',
  }
  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }
  useEffect(() => {}, [])
  const [startDateinput, setStartDateInput] = useState(new Date())
  const handleChangeInput = date => {
    setStartDateInput(date)
    setData(item => ({
      ...item,
      check_in: date.toISOString().split('.')[0],
    }))
  }

  const [data, setData] = useState({
    check_in: new Date().toISOString().split('.')[0],
    check_out: new Date().toISOString().split('.')[0],
    id_user_booking: 1,
    id_apartment: parseInt(param.id),
  })

  const handleClickInput = () => {}
  const [startDateOutput, setStartDateOutput] = useState(new Date())

  const handleChangeoutput = date => {
    setStartDateOutput(date)
    setData(item => ({
      ...item,
      check_out: date.toISOString().split('.')[0],
    }))
    const day = new Date()
    // console.log("theo lich"+date.toISOString())
    var cur = day.toISOString().split('.')[0].replace(/T/, ' ')
    console.log(cur)
  }
  const handleClickoutput = () => {
    console.log('')
  }

  const [error, setError] = useState(false)
  const hadlesendFormData = () => {
    if (
      data.check_in == '' ||
      data.check_out == '' ||
      data.id_user_booking == ''
    ) {
      console.log('ban chua du dieu kien de bookin phong')
    } else {
      console.log(data)
      axios
        .post(process.env.REACT_APP_API_URL + `/apartments/checkBooking`, data)
        .then(res => {
          console.log(res)
          if (res.data.err == false) {
            setError(false)
          } else {
            setError(true)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  //
  // const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleSubmit = ()=>{

  // }

  // const handleCanCle = () =>{

  // }
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              padding: '10px',
              borderTop: '1px solid #ccc',
              marginTop: '20px',
            }}>
            {itemList.map(item => (
              <div className="root-Policies-image">
                <div className="image-icon">{item.iconUrl}</div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            className="rootCheckBooking"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '150px',
            }}>
            <div style={{ padding: '10px' }}>
              <div className="rootBooking">
                <Grid container>
                  <Grid xs={6} sm={6} md={6} lg={6}>
                    <div className="checkin">
                      Nhận phòng
                      <DatePicker
                        className="DatePicker"
                        selected={startDateinput}
                        onCalendarOpen={handleClickInput}
                        onChange={handleChangeInput}
                        style={{ border: 'none' }}
                      />
                    </div>
                  </Grid>
                  <Grid xs={6} sm={6} md={6} lg={6}>
                    <div className="checkout">
                      Trả phòng
                      <DatePicker
                        className="DatePicker"
                        selected={startDateOutput}
                        onCalendarOpen={handleClickoutput}
                        onChange={handleChangeoutput}
                      />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className="bookingnote"></div>
            </div>
            <div
              className="btn-booking"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={hadlesendFormData}
                style={{ width: '88%', margin: 'auto ' }}>
                Booking
              </Button>
            </div>
            <div>
              {error ? (
                <Alert severity="error">
                  Xin lỗi ngày {data.check_in} => {data.check_out} không còn
                  trống{' '}
                </Alert>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
      {/* <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="spring-modal-title">Ngày {data.check_in} đến ngày {data.check_out} vẫn còn trống bạn có thể booking </p>
            <div style={{display:'flex' , justifyContent:'space-around'}}>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>Booking now</Button>
            
            <Button variant="contained" color="secondary"  onClick={handleCanCle}>Cancle</Button>

            </div>
          </div>
        </Fade>
      </Modal> */}
    </Container>
  )
}

export default Policies
