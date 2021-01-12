import { Link } from 'react-router-dom'

import GoLogo from '../../img/go-logo.png'

function Navbar() {
  return (
    <nav>
      <div className="main-nav-left">
        <img className="logo" src={GoLogo} alt="" />
        <ul className="main-nav">
          <li>
            <Link to="/hotels">Khách sạn</Link>
          </li>
          <li>
            <Link to="/apartments-page">Chỗ ở riêng</Link>
          </li>
          <li>
            <Link to="/coupons-page">Ưu đãi</Link>
          </li>
        </ul>
        <div className="sign-in">
          <Link to="/Become a part of us">Become a part of us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
