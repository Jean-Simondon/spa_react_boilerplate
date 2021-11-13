import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authActions } from '../../redux/authSlice'
import styles from './css/Header.module.scss'

const SuperAdminHeader = (props) => {

  let navigate = useNavigate();
  // let { path, url } = useRouteMatch();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const role = useSelector(state => state.auth.role)

  return (
    <nav className={styles.nav_corner}>
      <Link to="/">Home</Link>
      {role === 'USER' && <Link to="/dashboard">Account</Link>}
      {role === 'ADMIN' && <Link to="/admin">Dashboard</Link>}
      {role === 'SUPER_ADMIN' && <Link to="/superadmin">Dashboard</Link>}
      <button onClick={() => dispatch(authActions.logout())}>
        <span>Logout</span>
      </button>
    </nav>
  )

}

export default SuperAdminHeader
