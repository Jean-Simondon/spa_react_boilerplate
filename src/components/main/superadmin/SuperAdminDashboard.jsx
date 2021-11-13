import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import styles from './css/SuperAdmin.module.scss'

import SuperAdminHeader from '../../header/SuperAdminHeader'
import SuperAdminSidebar from '../../sidebar/SuperAdminSidebar'
// import SuperAdminFooter from '../../footer/SuperAdminFooter'

const SuperAdminDashboard = () => {

  return (
    <main className="">
      <SuperAdminHeader />
      <div className={styles['with-sidebar']}>
        <SuperAdminSidebar />
        <Outlet />
      </div>
      {/* <SuperAdminFooter /> */}
    </main>
  )

}

export default SuperAdminDashboard
