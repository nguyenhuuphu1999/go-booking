import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Apartments from '../components/homepage_component/Apartments'
import NearbyLocationListItem from '../components/homepage_component/NearbyLocationListItem'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import Header from '../components/header/Header'

import { fetchHomes } from '../store/home'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomes())
  }, [dispatch])

  const apartments = useSelector(state => state.home.apartment)
  const famousPlaces = useSelector(state => state.home.diaDiemNoiBat)

  return (
    <div>
      <Header />
      <Apartments apartments={apartments} />
      <NearbyLocationListItem />
      <FamousPlaces famousPlaces={famousPlaces} />
    </div>
  )
}

export default Home
