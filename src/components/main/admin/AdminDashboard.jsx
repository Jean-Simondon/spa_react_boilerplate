import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import AdminHeader from '../../header/AdminHeader'
import AdminSidebar from '../../sidebar/AdminSidebar'
import AdminFooter from '../../footer/AdminFooter'

const AdminDashboard = () => {

  return (
    <main className="">
      <AdminHeader />
      <div className="flex row page-container">
        <AdminSidebar />
        <Outlet />
      </div>
      <AdminFooter />
    </main>
  )

}

export default AdminDashboard
