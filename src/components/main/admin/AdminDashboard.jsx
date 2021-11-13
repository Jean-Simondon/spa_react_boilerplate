import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import styles from './css/Admin.module.scss'

import AdminHeader from '../../header/AdminHeader'
import AdminSidebar from '../../sidebar/AdminSidebar'
// import AdminFooter from '../../footer/AdminFooter'

const AdminDashboard = () => {

  return (
    <main className="">
      <AdminHeader />
      <div className={styles['with-sidebar']}>
        <AdminSidebar />
        <Outlet />
      </div>
      {/* <AdminFooter /> */}
    </main>
  )

}

export default AdminDashboard
