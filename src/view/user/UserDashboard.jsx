import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './css/User.module.scss'

import UserHeader from '../../components/header/UserHeader'
import UserSidebar from '../../components/sidebar/UserSidebar'
// import UserFooter from '../../footer/UserFooter'

const UserDashboard = () => {

  return (
    <main className="">
      <UserHeader />
      {/* <div className="flex row page-container"> */}
      <div className={styles['with-sidebar']}>
        <UserSidebar />
        <Outlet />
      </div>
      {/* <UserFooter /> */}
    </main>
  )
}

export default UserDashboard