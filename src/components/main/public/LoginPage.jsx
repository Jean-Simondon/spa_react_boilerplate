import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../form/LoginForm'
import styles from './css/Public.module.scss'

const LoginPage = (props) => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  let navigate = useNavigate();

  useEffect(() => {
    if ( isLoggedIn ) {
      navigate("/");
    }
  }, [isLoggedIn])

  return (
    <div className={styles['page-container'], styles['login-page']}>
      <h1>This is Login Page</h1>
      <p>user@user.net / jean</p>
      <p>admin@admin.net / jean</p>
      <p>supadmin@supadmin.net / jean</p>
      <LoginForm className="form" {...props} />
    </div>
  )

}

export default LoginPage