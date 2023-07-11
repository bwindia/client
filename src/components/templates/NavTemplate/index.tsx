import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'src/components/organisms/NavBar'

interface Props {}

const NavTemplate = (props: Props) => {
  return (
    <>
      <Navbar active={0} />
      <Outlet />
    </>
  )
}

export default NavTemplate
