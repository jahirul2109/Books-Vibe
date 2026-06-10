import React from 'react'
import Navbar from '../compontes/Header/Navbar'
import Footer from '../compontes/Footer/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className='flex flex-col items-center relative md:h-10/12 mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default Root