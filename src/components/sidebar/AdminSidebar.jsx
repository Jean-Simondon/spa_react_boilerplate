import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './css/Sidebar.module.scss'

const AdminSidebar = () => {

  const role = useSelector(state => state.auth.role)

    return (
      <nav className={styles.sidebar}>

        <Link to="/dashboard">Account</Link>

        <Link to="/admin">Admin</Link>

        {role == "SUPER_ADMIN" && 
          <Link to="/superadmin">Super Admin</Link>
        }

        <Link to="/admin/page1">Page 1</Link>
        <Link to="/admin/page2">Page 2</Link>
        <Link to="/admin/page3">Page 3</Link>
      </nav>
    )

}

export default AdminSidebar