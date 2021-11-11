import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import SuperAdminHeader from '../../header/SuperAdminHeader'
import SuperAdminSidebar from '../../sidebar/SuperAdminSidebar'
import SuperAdminFooter from '../../footer/SuperAdminFooter'

const SuperAdminDashboard = () => {

  return (
    <main className="">
      <SuperAdminHeader />
      <div className="flex row page-container">
        <SuperAdminSidebar />
        <Outlet />
      </div>
      <SuperAdminFooter />
    </main>
  )

}

export default SuperAdminDashboard
