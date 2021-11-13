import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styles from './css/Sidebar.module.scss'

const SuperAdminSidebar = () => {

  const role = useSelector(state => state.auth.role)

    return (
      <nav className={styles.sidebar}>

        <Link to="/dashboard">Account</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/superadmin">Super Admin</Link>

        <Link to="/superadmin/page1">Page 1</Link>
        <Link to="/superadmin/page2">Page 2</Link>
        <Link to="/superadmin/page3">Page 3</Link>
      </nav>
    )

}

export default SuperAdminSidebar
