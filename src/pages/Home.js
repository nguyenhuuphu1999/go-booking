import React from 'react'

import Apartments from '../components/Apartments'
import NearbyLocationListItem from '../components/NearbyLocationListItem'
import FamousPlaces from '../components/FamousPlaces'
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
