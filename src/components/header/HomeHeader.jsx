import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authActions } from '../../redux/authSlice'

import {
  //   ArrowDropDown as ArrowDropDownIcon,
  ExitToApp as ExitToAppIcon,
  //   Menu as MenuIcon,
  //   AccountCircle as AccountCircleIcon
} from '@material-ui/icons'

const HomeHeader = (props) => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // const user = useSelector(state => state.auth.user)
  const role = useSelector(state => state.auth.role)

  return (
    <header className="header">

      <nav className="nav-list">
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
      </nav>

      {isLoggedIn &&
        <nav className="nav-corner">
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

      {!isLoggedIn &&
        <nav className="nav-corner">
          <Link to="/login"><button>Login</button></Link>
        </nav>
      }

      <h1>This is home header</h1>

    </header>
  )

}

export default HomeHeader
