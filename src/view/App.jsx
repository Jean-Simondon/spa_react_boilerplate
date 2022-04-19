import React, { Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { authActions } from '../redux/authSlice'
import Snackbar from '../components/commons/Snackbar'
import './App.scss'

const Public = React.lazy(() => import('./public/Public'))
const Home = React.lazy(() => import('./public/Home'))
const Page1 = React.lazy(() => import('./public/Page1'))
const Page2 = React.lazy(() => import('./public/Page2'))
const Page3 = React.lazy(() => import('./public/Page3'))
const LoginPage = React.lazy(() => import('./public/LoginPage'))

const UserDashboard = React.lazy(() => import('./user/UserDashboard'))
const UserHome = React.lazy(() => import('./user/Home'))
const UserPage1 = React.lazy(() => import('./user/Page1'))
const UserPage2 = React.lazy(() => import('./user/Page2'))
const UserPage3 = React.lazy(() => import('./user/Page3'))

const AdminDashboard = React.lazy(() => import('./admin/AdminDashboard'))
const AdminHome = React.lazy(() => import('./admin/Home'))
const AdminPage1 = React.lazy(() => import('./admin/Page1'))
const AdminPage2 = React.lazy(() => import('./admin/Page2'))
const AdminPage3 = React.lazy(() => import('./admin/Page3'))

const SuperAdminDashboard = React.lazy(() => import('./superadmin/SuperAdminDashboard'))
const SuperAdminHome = React.lazy(() => import('./superadmin/Home'))
const SuperAdminPage1 = React.lazy(() => import('./superadmin/Page1'))
const SuperAdminPage2 = React.lazy(() => import('./superadmin/Page2'))
const SuperAdminPage3 = React.lazy(() => import('./superadmin/Page3'))

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const role = useSelector(state => state.auth.role)

  /**
   * Filtre si tentative d'accès aux routes protégées
   * Non connecté ou pas le bon rôle
   */
  if( location.pathname.startsWith("/admin")) {
    if( !isLoggedIn || ( role !== "ADMIN" && role !== "SUPER_ADMIN" )  ) {
      dispatch(authActions.logout());
      navigate("/");
    }
  } else if( location.pathname.startsWith("/superadmin")) {
    if( !isLoggedIn || role !== "SUPER_ADMIN" ) {
      dispatch(authActions.logout());
      navigate("/");
    }
  } else if( location.pathname.startsWith("/dashboard")) {
    if( !isLoggedIn || ( role !== "USER" && role !== "ADMIN" && role !== "SUPER_ADMIN" ) ) {
      dispatch(authActions.logout());
      navigate("/");
    }
  }

  return (
    <div>

      <Snackbar/>

        {/* Préparer a loading spinner */}
        <Suspense fallback={<p>Loading</p>}>

        <Routes>

          {/* Public part of the App */}
          <Route path="/" element={ <Public /> }>
              <Route path="" element={ <Home />} />
              <Route path="page1" element={ <Page1 />} />
              <Route path="page2" element={ <Page2 />} />
              <Route path="page3" element={ <Page3 />} />
              <Route path="login" element={ <LoginPage mode="login" /> } />
              <Route path="signin" element={ <LoginPage mode="signin" /> } />
              <Route path="password-forgot" element={ <LoginPage mode="password-forgot" /> } />
              <Route path="password-reset" element={ <LoginPage mode="password-reset" /> } />
          </Route>

          <Route path="/lp" element={ <></> }>

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

    </div>
  )
}

export default App