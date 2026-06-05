import React from 'react'
import Navbar from '../compontes/Header/Navbar'
import Footer from '../compontes/Footer/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className='w-10/12 mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Root