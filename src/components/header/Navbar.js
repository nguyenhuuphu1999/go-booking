import { Link } from 'react-router-dom'

import GoLogo from '../../img/go-logo.png'
import User from '../../img/person-circle-sharp.svg'

const nav = {
  width: '100%',
  backgroundColor: '#000000',
  height: '76px',
  position: 'fixed',
  color: '#fff',
}
const container = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: 1350,
}

const logo = {
  width: '50px',
  height: '50px',
}

const ulStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const liStyle = {
  listStyle: 'none',
  marginLeft: '20px',
}


function Navbar() {
  return (
    <nav style={nav}>
      <div style={container}>
        <div style={ulStyle}>
          <i style={liStyle}>
            <img style={logo} src={GoLogo} alt="" />
          </i>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/hotels">Khách sạn</Link>
            </li>
            <li style={liStyle}>
              <Link to="/apartments-page">Chỗ ở riêng</Link>
            </li>
            <li style={liStyle}>
              <Link to="/coupons-page">Ưu đãi</Link>
            </li>
          </ul>
        </div>

        <div style={ulStyle}>
          <Link to="/Become a part of us">Become a part of us</Link>
          <i>
            <img src={User} alt="" />
          </i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
