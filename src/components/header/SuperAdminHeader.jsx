import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { authActions } from '../../redux/authSlice'
import {
  //   ArrowDropDown as ArrowDropDownIcon,
  ExitToApp as ExitToAppIcon,
  //   Menu as MenuIcon,
  //   AccountCircle as AccountCircleIcon
} from '@material-ui/icons'
import '.css/header.scss'

const SuperAdminHeader = (props) => {

  let history = useHistory();
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const role = useSelector(state => state.auth.role)

  if (!isLoggedIn) {
    history.push("/");
  }

  return (
    <header className="header">

      <nav className="nav-corner">
        <Link to="/">Home</Link>
        {role === 'USER' && <Link to="/dashboard">Account</Link>}
        {role === 'ADMIN' && <Link to="/admin">Dashboard</Link>}
        {role === 'SUPER_ADMIN' &&
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/superadmin">Super Admin</Link>
          </>
        }
        <button onClick={() => dispatch(authActions.logout())}>
          <ExitToAppIcon />
          <span>Déconnexion</span>
        </button>
      </nav>


    </header>
  )

}

export default SuperAdminHeader
