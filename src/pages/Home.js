import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Apartments from '../components/homepage_component/Apartments'
import NearbyLocationListItem from '../components/homepage_component/NearbyLocationListItem'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import Header from '../components/header/Header'

import { fetchApartments } from '../store/home';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  const apartments = useSelector(state => state.home.apartments);

  return (
    <div>
      <Header />
      <Apartments apartments={apartments}/>
      <NearbyLocationListItem/>
      <FamousPlaces/>
    </div>
  )
}

export default Home
