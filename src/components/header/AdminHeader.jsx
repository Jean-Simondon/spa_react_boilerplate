import React from 'react'
import { Link } from 'react-router-dom'

const AdminMenu = (props) => {

    return (
      <>
        <Link to="/">link 1</Link>
        <Link to="/">link 2</Link>
        <Link to="/">link 3</Link>
        
        <h2>This is the admin Header</h2>
      </>
    )

}

export default AdminMenu
