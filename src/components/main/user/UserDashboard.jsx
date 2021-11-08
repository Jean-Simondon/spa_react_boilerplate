import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const UserDashboard = () => {

  return (
    <div className="center">
      <h1>USER DASHBOARD</h1>
      <Switch>
        <Route path="/dashboard/page1"><Page1/></Route>
        <Route path="/dashboard/page2"><Page2/></Route>
        <Route path="/dashboard/page3"><Page3/></Route>
        <Route path="/dashboard/"><Home /></Route>
      </Switch>
    </div>
  )
}

export default UserDashboard