import React from 'react';
import { Link } from 'react-router-dom'
import '.css/sidebar.scss'

const AdminSidebar = () => {

    return (
      <nav className="sidebar">
        <Link to="/admin/page1">Page 1</Link>
        <Link to="/admin/page2">Page 2</Link>
        <Link to="/admin/page3">Page 3</Link>
      </nav>
    )

}

export default AdminSidebar