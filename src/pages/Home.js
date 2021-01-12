import React from 'react'

import Apartments from '../components/homepage_component/Apartments'
import NearbyLocationListItem from '../components/homepage_component/NearbyLocationListItem'
import FamousPlaces from '../components/homepage_component/FamousPlaces'
import Header from '../components/header/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <Apartments/>
      <NearbyLocationListItem/>
      <FamousPlaces/>
    </div>
  )
}

export default Home
