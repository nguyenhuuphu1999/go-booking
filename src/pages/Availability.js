import React from 'react'

import Locations from '../components/locations/Locations'
import Hotels from '../components/hotelspage_component/HotelsNearYou'
import HomeStay from '../components/homestay/HomeStayNearYou'
import Hotels_2 from '../components/hotels_2/Hotels_2'
import GroundFloor from '../components/ground_floor/GroundFloor'
import TopHomeStay from '../components/homestay/TopHomeStay'


const Availability = () => {
  return (
    <div>
      <Locations />
      <Hotels />
      <HomeStay />
      <Hotels_2 />
      <GroundFloor />
      <TopHomeStay />
    </div>
  )
}

export default Availability
