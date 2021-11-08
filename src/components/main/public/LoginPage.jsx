import React from 'react'
import LoginForm from '../../form/LoginForm'

const LoginPage = (props) => {

  return (
    <>
      <h1>This is Login Page</h1>
      <p>user@user.net / jean</p>
      <p>admin@admin.net / jean</p>
      <p>supadmin@supadmin.net / jean</p>
      <LoginForm className="form" {...props} />
    </>
  )

}

export default LoginPage