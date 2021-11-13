import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styles from './css/Sidebar.module.scss'

const UserSidebar = () => {

  const role = useSelector(state => state.auth.role)

  return (
    <nav className={styles.sidebar}>

      <Link to="/dashboard">Account</Link>

      {(role == "SUPER_ADMIN" || role == "ADMIN") &&
        <Link to="/admin">Admin</Link>
      }

      {role == "SUPER_ADMIN" &&
        <Link to="/superadmin">Super Admin</Link>
      }

      <Link to="/dashboard/page1">Page 1</Link>
      <Link to="/dashboard/page2">Page 2</Link>
      <Link to="/dashboard/page3">Page 3</Link>
    </nav>
  )

}

export default UserSidebar
