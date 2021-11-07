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

const AdminMenu = (props) => {

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

      {/* <nav className="nav-list">
        <Link to="/">Home</Link>
      </nav> */}

      {isLoggedIn &&
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
      }

      <h1>This is Admin header</h1>

    </header>
  )

}

export default AdminMenu
