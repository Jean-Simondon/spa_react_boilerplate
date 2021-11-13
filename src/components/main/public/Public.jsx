import React from 'react'
import { Outlet } from 'react-router-dom' // find redirect again
import styles from './css/Public.module.scss'

import HomeHeader from '../../header/HomeHeader'
import HomeFooter from '../../footer/HomeFooter'

const Public = () => {

  return (
    <main className="">
      <HomeHeader />
      <div className={styles['page-container']}>
        <Outlet />
      </div>
      <HomeFooter />
    </main>
  )

}

export default Public