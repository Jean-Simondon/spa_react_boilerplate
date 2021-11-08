import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
// import { authActions } from '../redux/authSlice'
// import Snackbar from './commons/Snackbar'
import routes from './routes'
import './App.scss'

const App = () => {

  // let { path, url } = useRouteMatch();
  const history = useHistory();
  // const dispatch = useDispatch();
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(state => state.auth.role)

  /**
   * Filtre si tentative d'accès au route protégé
   * Non connecté ou pas le bon rôle
   */
  let withside_bar = ' without-sidebar';
  if( location.pathname.startsWith("/admin")) {
    withside_bar = ' with-sidebar';
    if( !isLoggedIn || ( role !== "ADMIN" && role !== "SUPER_ADMIN" )  ) {
      // dispatch(authActions.logout());
      history.push("/");
    }
  } else if( location.pathname.startsWith("/superadmin")) {
    withside_bar = ' with-sidebar';
    if( !isLoggedIn || role !== "SUPER_ADMIN" ) {
      // dispatch(authActions.logout());
      history.push("/");
    }
  } else if( location.pathname.startsWith("/dashboard")) {
    withside_bar = ' with-sidebar';
    if( !isLoggedIn || role !== "USER" ) {
      // dispatch(authActions.logout());
      history.push("/");
    }
  }

  return (
    <div className="app">

      {/* <Snackbar/> Global */}

      {/* HEADER */}
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

      <main className={"page-container" + withside_bar}>

        {/* SIDEBAR */}
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

        {/* MAIN */}
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

      {/* FOOTER */}
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