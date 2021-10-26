import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import UserDashboardContainer from '../user/UserDashboardContainer'
import AdminDashboardContainer from '../admin/AdminDashboardContainer'

const Home = () => {

  const [ role, setRole ] = useState('USER');

  return (
      <main>
        <h1>HOME</h1>
        {role === 'ADMIN' &&
          <Switch>
            <Route exact path={'/'} component={AdminDashboardContainer}/>
          </Switch>
        }
        { role === 'USER' &&
          <Switch>
            <Route path={'/'} render={() => (<UserDashboardContainer/>)}/>
          </Switch>
        }
      </main>
  )

}

Home.propTypes = {
  email: PropTypes.string,
  onLogout: PropTypes.func,
  user: PropTypes.object,
}

export default Home

