import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/UI/Home/Home'
import NotFound from '../components/UI/PageNotFound/PageNotFound'
import UserDetails from '../components/UI/UserDetails/UserDetails'

function LayoutRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default LayoutRoutes