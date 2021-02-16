import React from 'react'

import Navbar from '../components/header/Navbar'
import Locations from '../components/locations/Locations'
import Hotels from '../components/locations/Hotels'
import HomeStays from '../components/locations/HomeStays'
import Motels from '../components/locations/Motels'
import GroundFloor from '../components/locations/GroundFloor'

import { fetchHotel } from '../store/location/hotel'
import { fetchApartment } from '../store/location/apartment'
import { fetchMotel } from '../store/location/motel'
import { fetchGroundFloor } from '../store/location/groundFloor'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Availability = () => { 

  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchHotel(id))
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchApartment(id))
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchMotel(id))
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(fetchGroundFloor(id))
  }, [dispatch, id]);

  const city = useSelector(state => state.hotel.city);
  const hotels = useSelector(state => state.hotel.diaDiemNoiBatChiTiet)
  const homeStayList = useSelector(state => state.apartment.diaDiemNoiBatChiTiet)
  const motelList = useSelector(state => state.motel.diaDiemNoiBatChiTiet)
  const groundFloorList = useSelector(state => state.groundFloor.diaDiemNoiBatChiTiet)

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Locations city={city}/> 
        <Hotels hotels={hotels}/>
        <HomeStays homeStayList={homeStayList}/>
        <Motels motelList={motelList}/>
        <GroundFloor groundFloorList={groundFloorList}/>
      </div>
    </div>
  )
}

export default Availability
