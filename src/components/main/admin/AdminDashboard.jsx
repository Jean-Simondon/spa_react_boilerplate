import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const AdminDashboard = () => {

  const location = useLocation();

  return (
    <>
      <h1>ADMIN DASHBOARD</h1>
      <Switch>
        <Route path="/admin/page1"><Page1/></Route>
        <Route path="/admin/page2"><Page2/></Route>
        <Route path="/admin/page3"><Page3/></Route>
        <Route path="/admin/"><Home /></Route>
      </Switch>
    </>
  )

}

export default AdminDashboard
