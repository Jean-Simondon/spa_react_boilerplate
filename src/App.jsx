import React, { useState } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import LoginContainer from './views/LoginContainer'
import HomeContainer from './views/home/HomeContainer'
// import Snackbar from './commons/Snackbar'

const App = ({ isLoggedIn, location}) => {

    return (
      <>
        <h1>APP</h1>
        {/* <Snackbar/> */}
        <Switch location={location}>
          <Route exact path={'/login'} render={() => <LoginContainer mode="login" isLoggedIn={isLoggedIn}/>}/>
          <Route exact path={'/password-forgot'} render={() => <LoginContainer mode="password_forgot" isLoggedIn={isLoggedIn}/>}/>
          <Route exact path={'/password-reset'} render={() => <LoginContainer mode="password_reset" isLoggedIn={isLoggedIn}/>}/>
          <Route path={'/'} render={() => isLoggedIn ? <HomeContainer/> : <Redirect to={'/login'}/>}/>
          <Route path={'/'} render={() => <HomeContainer/>}/>
        </Switch>
      </>
    )
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default withRouter(App)
