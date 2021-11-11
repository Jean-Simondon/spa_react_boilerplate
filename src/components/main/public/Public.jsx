import React from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom' // find redirect again
import { useSelector } from 'react-redux'

import HomeHeader from '../../header/HomeHeader'
import HomeFooter from '../../footer/HomeFooter'

const Public = () => {

  return (
    <main className="">
      <HomeHeader />
      <div className="page-container center">
        <Outlet />
      </div>
      <HomeFooter />
    </main>
  )

}

export default Public