import React from 'react';
import { Link } from 'react-router-dom'
import '.css/sidebar.scss'

const UserSidebar = () => {

    return (
      <nav className="sidebar">
        <Link to="/dashboard/page1">Page 1</Link>
        <Link to="/dashboard/page2">Page 2</Link>
        <Link to="/dashboard/page3">Page 3</Link>
      </nav>
    )

}

export default UserSidebar