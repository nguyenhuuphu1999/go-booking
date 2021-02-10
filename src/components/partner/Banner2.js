import React from 'react'
import banner from '../../img/partner-banner.png'
import Content from './Content'
import LogInBtn from './LogInBtn'
import RegisterBtn from './RegisterBtn'

const Banner2 = () => {
  const imgStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative',
  }

  const boxStyle = {
    zIndex: '10',
    position: 'absolute',
    top: '58%',
    left: '3%'
  }

  const BtnStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto'
  }

  return (
    <div style={imgStyle}>
      <img style={imgStyle} src={banner} alt="" />
      <div style={boxStyle}>
        <Content />
        <div>
          <div  style={BtnStyle}>
            <LogInBtn />
          </div>
          <div style={BtnStyle}>
            <RegisterBtn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
