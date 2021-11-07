import React from 'react';
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

    return (
      <nav>
        <Link to="/admin/page1">Page 1</Link>
        <Link to="/admin/page2">Page 2</Link>
        <Link to="/admin/page3">Page 3</Link>
      </nav>
    )

}

export default AdminSidebar