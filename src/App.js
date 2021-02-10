// import React from 'react';
import './App.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'


import Home from './pages/Home'
import ApartmentsPage from './pages/ApartmentsPage'
import Hotels from './pages/Hotels'
import CouponsPage from './pages/CouponsPage'
import HomeStayPage from './pages/HomeStayPage'
import Availability from './pages/Availability'
import PartnerPage from './pages/PartnerPage'
import RoomDetailPage from './pages/RoomDetailPage'
import BookingPage from './pages/BookingPage'


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
      <Router>
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/hotels">
            <Hotels />
          </Route>
          <Route path="/apartments-page">
            <ApartmentsPage />
          </Route>
          <Route path="/coupons-page">
            <CouponsPage />
          </Route>
          <Route path="/apartments/:id">
            <HomeStayPage /> 
          </Route>
          <Route path="/cities/:id">
            <Availability />
          </Route>
          <Route path="/become-a-partner">
            <PartnerPage />
          </Route>
          <Route path="/near-by-location">
            <RoomDetailPage />
          </Route>
          <Route path="/booking/:id">
            <BookingPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
