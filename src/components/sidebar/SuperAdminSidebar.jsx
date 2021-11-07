import React from 'react';
import { Link } from 'react-router-dom'

const SuperAdminSidebar = () => {

    return (
      <nav>
        <Link to="/superadmin/page1">Page 1</Link>
        <Link to="/superadmin/page2">Page 2</Link>
        <Link to="/superadmin/page3">Page 3</Link>
      </nav>
    )

}

export default SuperAdminSidebar