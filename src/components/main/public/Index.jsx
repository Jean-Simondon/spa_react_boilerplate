import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import LoginPage from './LoginPage'

const Index = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  return (
    <Switch>
      <Route exact path="/page1"><Page1 /></Route>
      <Route exact path="/page2"><Page2 /></Route>
      <Route exact path="/page3"><Page3 /></Route>
 
      <Route exact path="/login" render={() => !isLoggedIn ? <LoginPage mode="login" /> : <Redirect to={"/"} /> } />
      <Route exact path="/signin" render={() => !isLoggedIn ? <LoginPage mode="signin" /> : <Redirect to={"/"} /> } />
      <Route exact path="/password-forgot" render={() => !isLoggedIn ? <LoginPage mode="password-forgot" /> : <Redirect to={"/"} /> } />
      <Route exact path="/password-reset" render={() => !isLoggedIn ? <LoginPage mode="password-reset" /> : <Redirect to={"/"} /> } />
 
      <Route path="/"> <Home /></Route>
    </Switch>
  )

}

export default Index