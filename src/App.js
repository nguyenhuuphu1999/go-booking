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
import PageHomeOwn from './components/PageHomeOwn/index'
import '../src/styletailwindcss/main.css'
import ApartmentOWn from './components/Apartment'
import EditPageApartment from './EditPageApartment/Index'

function App() {
 

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
          <Route path="/detail/:id">
            <RoomDetailPage />
          </Route>
          <Route path="/booking/:id">
            <BookingPage />
          </Route>

          <Route path="/pagehome/apartment">
            <ApartmentOWn />
          </Route>

          <Route path="/pagehome" component={PageHomeOwn}/>

          <Route path="/editpageApartment/:id" component={EditPageApartment}/>

        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
