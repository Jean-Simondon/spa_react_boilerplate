import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authActions } from '../../redux/authSlice'
import styles from './css/Header.module.scss'

const HomeHeader = (props) => {

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  // const user = useSelector(state => state.auth.user)
  const role = useSelector(state => state.auth.role)

  return (
    <>
      <header className={styles.header}>

        <nav className={styles.nav_list}>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
          <Link to="page2">Page 2</Link>
          <Link to="page3">Page 3</Link>
        </nav>

      </header>

      {isLoggedIn &&
        <nav className={styles.nav_corner}>
          {role === 'USER' && <Link to="/dashboard">Account</Link>}
          {role === 'ADMIN' && <Link to="/admin">Dashboard</Link>}
          {role === 'SUPER_ADMIN' && <Link to="/superadmin">Dashboard</Link>}
          <button onClick={() => dispatch(authActions.logout())}>
            <span>Logout</span>
          </button>
        </nav>
      }

      {!isLoggedIn &&
        <nav className={styles.nav_corner}>
          <Link to="/login"><button>Login</button></Link>
        </nav>
      }
    </>
  )

}

export default HomeHeader

