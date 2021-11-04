import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Snackbar from './commons/Snackbar'
import routes from '../routes'

const App = () => {

  // filtre redirect si jamais les roles ne sont pas les bon
  // si route /admin, et pas role admin, Redirect vers /
  // si route /user et pas role user, Redirect vers /

    // if (props.isLoggedIn) {
  //   return <Redirect push to="/" />
  // }
  
  

  return (
    <div className="app">
      {/* <Snackbar/> Global */}
      <Switch>
        {routes.map((route, idx) => {
          return route.header && (
            <Route key={idx} path={route.path} exact={route.exact}>
              <route.header {...route} />
            </Route>
          )
        })
        }
      </Switch>
      <main>
        <Switch>
          {routes.map((route, idx) => {
            return route.sidebar && (
              <Route key={idx} path={route.path} exact={route.exact}>
                <route.sidebar {...route} />
              </Route>
            )
          })
          }
        </Switch>
        <Switch>
          {routes.map((route, idx) => {
            return route.main && (
              <Route key={idx} path={route.path} exact={route.exact}>
                <route.main {...route} />
              </Route>
            )
          })
          }
        </Switch>
      </main>
      <Switch>
        {routes.map((route, idx) => {
          return route.footer && (
            <Route key={idx} path={route.path} exact={route.exact}>
              <route.footer {...route} />
            </Route>
          )
        })
        }
      </Switch>
    </div>
  )
}

export default App