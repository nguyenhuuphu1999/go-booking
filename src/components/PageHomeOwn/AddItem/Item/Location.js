import { React, useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Link, Redirect } from 'react-router-dom'
import TypeApartment from '../Item/TypeApartment'
import Inpust_select from '../../../Input/inpust_select'
import axios from 'axios'
const Location = props => {
  // console.log( props)
  const handlOnClick = () => {
    localStorage.setItem('page', 1)
  }

  const [option, setOption] = useState([])
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    axios
      .get('https://do-an-dariu.herokuapp.com/city')
      .then(res => {
        console.log(res.data.data)
        setOption(res.data.data)
        if (res != null) {
          setHidden(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // const onchange = (e) =>{
  //     console.log(e.target.value)
  // }

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
      <div style={{ width: '70%' }}>
        <p style={{ fontSize: '22px', marginBottom: '19px' }}>
          Xin chào Phúc! Hãy bắt đầu đăng cho thuê không gian của bạn.{' '}
        </p>
        <p>Nhà/phòng cho thuê của bạn ở đâu?</p>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Inpust_select
            onChange={props.onchange}
            option={option}
            name="id_city"
          />

          <div style={{ padding: '30px', margin: 'auto' }}>
            {hidden == true ? (
              <Link to="/pagehome?item=1">
                <Button
                  onClick={handlOnClick}
                  style={{
                    margin: 'auto',
                    marginTop: '10%',
                    borderRadius: '20px',
                    outline: 'none',
                  }}
                  variant="contained"
                  color="secondary">
                  Tiếp tục
                </Button>
              </Link>
            ) : (
              <Button
                onClick={handlOnClick}
                style={{
                  margin: 'auto',
                  marginTop: '10%',
                  borderRadius: '20px',
                  outline: 'none',
                }}
                variant="contained"
              >
                Tiếp tục
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Location
