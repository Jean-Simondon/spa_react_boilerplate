import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const SuperAdminDashboard = () => {

  return (
    <div className="center">
      <h1>SUPER ADMIN DASHBOARD</h1>
      <Switch>
        <Route path="/superadmin/page1"><Page1/></Route>
        <Route path="/superadmin/page2"><Page2/></Route>
        <Route path="/superadmin/page3"><Page3/></Route>
        <Route path="/superadmin/"><Home /></Route>
      </Switch>
    </div>
  )

}

export default SuperAdminDashboard
