import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../redux/authSlice'
import {
  //   ArrowDropDown as ArrowDropDownIcon,
  ExitToApp as ExitToAppIcon,
  //   Menu as MenuIcon,
  //   AccountCircle as AccountCircleIcon
} from '@material-ui/icons'
import styles from './css/Header.module.scss'

const UserHeader = (props) => {

  let navigate = useNavigate();
  // let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const role = useSelector(state => state.auth.role)

  return (
    <header className={styles.header}>

      <nav className={styles.nav_corner}>
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

export default UserHeader
