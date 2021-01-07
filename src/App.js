// import React from 'react';
import './App.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Feedbacks from './components/Feedbacks'
import Footer from './components/footer/Footer'

import Header from './components/header/Header'
//import Apartments from './components/Apartments'
import NearbyLocationListItem from './components/NearbyLocationListItem'
import FamousPlaces from './components/FamousPlaces'

import Home from './pages/Home'
import ApartmentsPage from './pages/ApartmentsPage'
import Hotels from './pages/Hotels'
import Coupons from './pages/Coupons'

// import React, { useEffect, useState } from 'react'
// import apartmentApi from './api/apartmentApi'

function App() {
  // const [apartments, setApartments] = useState([])

  // useEffect(() => {
  //   const fetchApartments = async () => {
  //     try {
  //       // const params = { _page: 1, _limit: 10 };
  //       const response = await apartmentApi.getAll()
  //       console.log('Fetch products successfully: ', response)
  //       setApartments(response.data)
  //     } catch (error) {
  //       console.log('Failed to fetch product list: ', error)
  //     }
  //   }
  //   fetchApartments()
  // }, []);

  return (
    <div className="App">
      {/* <div className="apartments">
        {apartments.map(apartment => (
          <Apartment apartment={apartment} />
        ))}
      </div> */}
      <Router>
        
        {/* <Page />
        <NearbyLocationListItem />
        <FamousPlaces />

        <Feedbacks /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/apartments-page">
            <ApartmentsPage />
          </Route>
          <Route path="/coupons">
            <Coupons />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
