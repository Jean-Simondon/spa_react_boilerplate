import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import UserHeader from '../../header/UserHeader'
import UserSidebar from '../../sidebar/UserSidebar'
import UserFooter from '../../footer/UserFooter'

const UserDashboard = () => {

  return (
    <main className="">
      <UserHeader />
      <div className="flex row page-container">
        <UserSidebar />
        <Outlet />
      </div>
      <UserFooter />
    </main>
  )
}

export default UserDashboard