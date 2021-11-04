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
  const user = useSelector(state => state.auth.user)
  const role = useSelector(state => state.auth.role)

  return (
    <header>
      <>
        <Link to="/">link 1</Link>
        <Link to="/">link 2</Link>
        <Link to="/">link 3</Link>
      </>
      {role === 'USER' &&
        <Link to="/user">User</Link>
      }
      {role === 'ADMIN' &&
        <Link to="/admin">Admin</Link>
      }
      {role === 'SUPER_ADMIN' &&
        <Link to="/superadmin">Super Admin</Link>
      }
      {role === 'ANON' && !isLoggedIn &&
        <>
          <Link to="/login"><button>Login</button></Link>
        </>
      }
      {isLoggedIn &&
        <>
          <span>{user.name}</span>
          <button onClick={() => dispatch( authActions.logout() )}>
            <ExitToAppIcon />
            <span>Déconnexion</span>
          </button>
        </>
      }

      <h2>This is the Home Header</h2>
    </header>
  )

}

export default HomeHeader

