import { Link } from 'react-router-dom'

import GoLogo from '../../img/go-logo.png'
// import User from '../../img/person-circle-sharp.svg'

import UserIcon from '../user/UserIcon'

const nav = {
  width: '100%',
  backgroundColor: '#000000',
  height: '76px',
  position: 'fixed',
  color: '#fff',
  padding: '0 30px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '0',
  left: '0'
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
        <div style={ulStyle}>
          <i style={liStyle}>
            <Link to="/home"> <img style={logo} src={GoLogo} alt="" /></Link>  
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
          <Link to="/become-a-partner">Become a part of us</Link>
          {/* <i style={{marginLeft: '30px'}}>
            <img style={logo} src={User} alt="" />
          </i> */}
          <UserIcon/>
        </div>
    </nav>
  )
}

export default Navbar
