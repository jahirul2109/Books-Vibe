import React from 'react'
import Navbar from '../compontes/Header/Navbar'
import Footer from '../compontes/Footer/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default Root