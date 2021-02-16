import React from 'react'

import Navbar from '../components/header/Navbar'
import HomeStayNearYou from '../components/homestay/HomeStayNearYou'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import TopHomeStay from '../components/homestay/TopHomeStay'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomeStay } from '../store/homeStay'
import { useParams } from 'react-router-dom'

const HomeStayPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(fetchHomeStay(id))
  }, [dispatch, id])

  const typeHouse = useSelector(state => state.homeStay.typeHouse)
  const homeStayList = useSelector(state => state.homeStay.typeApartment)
  const nearbyLocationItemList = useSelector(
    state => state.homeStay.RattingGood, 
  )

  const h3Style = {
    marginLeft: 30,
    fontSize: 27,
    margin: '30px auto',
  }

  return (
    <div>
      <Navbar />
      <div style={{ margin: '90px auto 0 auto', maxWidth: '1350px' }}>
        <h3 style={h3Style} typeHouse={typeHouse}>
          {typeHouse.title}
        </h3>
        <HomeStayNearYou homeStayList={homeStayList} /> 
        <FamousPlaces />
        <h3 style={h3Style} typeHouse={typeHouse}>
          Khách đánh giá cao vị trí của những {typeHouse.title} này
        </h3>
        <TopHomeStay nearbyLocationItemList={nearbyLocationItemList} />
      </div>
    </div>
  )
}

export default HomeStayPage
