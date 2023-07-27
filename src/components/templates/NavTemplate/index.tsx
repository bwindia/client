import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/organisms/Footer'
import Navbar from 'src/components/organisms/NavBar'

interface Props {}

const NavTemplate = (props: Props) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default NavTemplate
