import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
// import { authActions } from '../redux/authSlice'
// import Snackbar from './commons/Snackbar'
import './App.scss'

const Public = React.lazy(() => import('./main/public/Public'))
const Home = React.lazy(() => import('./main/public/Home'))
const Page1 = React.lazy(() => import('./main/public/Page1'))
const Page2 = React.lazy(() => import('./main/public/Page2'))
const Page3 = React.lazy(() => import('./main/public/Page3'))
const LoginPage = React.lazy(() => import('./main/public/LoginPage'))

const UserDashboard = React.lazy(() => import('./main/user/UserDashboard'))
const UserHome = React.lazy(() => import('./main/user/Home'))
const UserPage1 = React.lazy(() => import('./main/user/Page1'))
const UserPage2 = React.lazy(() => import('./main/user/Page2'))
const UserPage3 = React.lazy(() => import('./main/user/Page3'))

const AdminDashboard = React.lazy(() => import('./main/admin/AdminDashboard'))
const AdminHome = React.lazy(() => import('./main/admin/Home'))
const AdminPage1 = React.lazy(() => import('./main/admin/Page1'))
const AdminPage2 = React.lazy(() => import('./main/admin/Page2'))
const AdminPage3 = React.lazy(() => import('./main/admin/Page3'))

const SuperAdminDashboard = React.lazy(() => import('./main/superadmin/SuperAdminDashboard'))
const SuperAdminHome = React.lazy(() => import('./main/superadmin/Home'))
const SuperAdminPage1 = React.lazy(() => import('./main/superadmin/Page1'))
const SuperAdminPage2 = React.lazy(() => import('./main/superadmin/Page2'))
const SuperAdminPage3 = React.lazy(() => import('./main/superadmin/Page3'))


const App = () => {

  // let { path, url } = useRouteMatch();
  const navigate = useNavigate();
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
      navigate("/");
    }
  } else if( location.pathname.startsWith("/superadmin")) {
    withside_bar = ' with-sidebar';
    if( !isLoggedIn || role !== "SUPER_ADMIN" ) {
      // dispatch(authActions.logout());
      navigate("/");
    }
  } else if( location.pathname.startsWith("/dashboard")) {
    withside_bar = ' with-sidebar';
    if( !isLoggedIn || role !== "USER" ) {
      // dispatch(authActions.logout());
      navigate("/");
    }
  }

  return (
    <div className="old-app">

      {/* <Snackbar/> Global */}

        {/* Préparer a loading spinner */}
        <Suspense fallback={<p>Loading</p>}>

        <Routes>

          {/* Public part of the App */}
          <Route path="/" element={ <Public /> }>
              <Route path="" element={ <Home />} />
              <Route path="page1" element={ <Page1 />} />
              <Route path="page2" element={ <Page2 />} />
              <Route path="page3" element={ <Page3 />} />
              <Route path="login" element={<LoginPage mode="login" />} />
              <Route path="signin" element={<LoginPage mode="signin" />} />
              <Route path="password-forgot" element={<LoginPage mode="password-forgot" />} />
              <Route path="password-reset" element={<LoginPage mode="password-reset" />} />
          </Route>

          {/* User part of the App */}
          <Route path="dashboard/" element={ <UserDashboard /> }>
              <Route path="" element={ <UserHome />} />
              <Route path="page1" element={ <UserPage1 />} />
              <Route path="page2" element={ <UserPage2 />} />
              <Route path="page3" element={ <UserPage3 />} />
          </Route>

          {/* Admin part of the App */}
          <Route path="/admin" element={ <AdminDashboard /> }>
              <Route path="" element={ <AdminHome />} />
              <Route path="page1" element={ <AdminPage1 />} />
              <Route path="page2" element={ <AdminPage2 />} />
              <Route path="page3" element={ <AdminPage3 />} />
          </Route>

          {/* SuperAdmin part of the App */}
          <Route path="/superadmin" element={ <SuperAdminDashboard /> }>
              <Route path="" element={ < SuperAdminHome />} />
              <Route path="page1" element={ < SuperAdminPage1 />} />
              <Route path="page2" element={ < SuperAdminPage2 />} />
              <Route path="page3" element={ < SuperAdminPage3 />} />
          </Route>

        </Routes>
      </Suspense>



      {/* HEADER */}
      {/* <Routes>
        {routes.map((route, idx) => {
          return route.header && (
            <Route key={idx} path={route.path} element={ <route.header {...route} /> } />
          )
        })
        }
      </Routes> */}

      {/* <main className={"page-container" + withside_bar}> */}

        {/* SIDEBAR */}
        {/* <Routes>
          {routes.map((route, idx) => {
            return route.sidebar && (
              <Route key={idx} path={route.path} element={ <route.sidebar {...route} /> } />
              )
          })
          }
        </Routes> */}

        {/* MAIN */}
        {/* <Routes>
          {routes.map((route, idx) => {
            return route.main && (
              <Route key={idx} path={route.path} element={ <route.main {...route} /> } />
            )
          })
          }
        </Routes> */}

      {/* </main> */}

      {/* FOOTER */}
      {/* <Routes>
        {routes.map((route, idx) => {
          return route.footer && (
            <Route key={idx} path={route.path} element={ <route.footer {...route} /> } />
          )
        })
        }
      </Routes> */}

    </div>
  )
}

export default App