import React from 'react'

import Locations from '../components/locations/Locations'
import Hotels from '../components/hotelspage_component/HotelsNearYou'
import HomeStay from '../components/homestay/HomeStayNearYou'
import Hotels_2 from '../components/hotels_2/Hotels_2'
import GroundFloor from '../components/ground_floor/GroundFloor'
import TopHomeStay from '../components/homestay/TopHomeStay'
import Navbar from '../components/header/Navbar'

import { fetchAvailability } from '../store/availability'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Availability = () => { 

  const dispatch = useDispatch
  const { id } = useParams
  useEffect(() => {
    dispatch(fetchAvailability(id))
  }, [dispatch])

  const city = useSelector(state => state.availability.city)

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Locations city={city}/> 
        <Hotels />
        <HomeStay />
        <Hotels_2 />
        <GroundFloor />
        <TopHomeStay />
      </div>
    </div>
  )
}

export default Availability
