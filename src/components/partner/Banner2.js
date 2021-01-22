import React from 'react'
import banner from '../../img/partner-banner.png'

const Banner2 = () => {
    const imgStyle = {
        width: '100%',
        height: '100vh'
    }

    return (
        <div style={imgStyle}>
            <img style={imgStyle}  src={banner} alt=""/>
        </div>
    )
}

export default Banner2
