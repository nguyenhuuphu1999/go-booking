import React, { useState } from 'react'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'
import SearchIcon from './SearchIcon'
import Slogan from './Slogan'
import $ from 'jquery'
import './Header.css'
const Header = () => {
  const [hiddenNavbar, setHiddenNavbar] = useState(true)
  $(document).ready(function () {
    var lastScrollTop = 0
    $(window).scroll(function () {
      var currentScrollTop = $(this).scrollTop()
   
      if (currentScrollTop <= 400) {
        setHiddenNavbar(true)
      } else {
        setHiddenNavbar(false)
      }
      // lastScrollTop = currentScrollTop
    })
  })
  return (
    <div>
      <header>
        <div className={hiddenNavbar ? 'show' : 'hidden'}>
          <Navbar />
          <HomeSearch />
          <Slogan />
        </div>
        {/* <SearchIcon /> */}
      </header>
    </div>
  )
}

export default Header
