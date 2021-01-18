import React from 'react'

import Navbar from '../components/header/Navbar'
import HomeStayNearYou from '../components/homestay/HomeStayNearYou'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import TopHomeStay from '../components/homestay/TopHomeStay'

const HomeStayPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <h3>Tìm chỗ ở riêng</h3>
      <HomeStayNearYou />
      <FamousPlaces />
      <TopHomeStay />
    </div>
  )
}

export default HomeStayPage
