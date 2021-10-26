import React from 'react'
import PropTypes from 'prop-types'
import * as qs from 'query-string'
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom";

import usersAPI from '../api/usersAPI'
import { getErrorMsgFromSymfonyResponse, getCSSHeight } from '../utils/helpers'

const Login = () => {

  const onLoginSubmit = (target) => {
    target.preventDefault()

    if (this.state.email.trim().length === 0) {
      this.setState({
        successMsg: null,
        errorMsg: "L'email est requis"
      })
      return
    }

    if (this.state.password.trim().length === 0) {
      this.setState({
        successMsg: null,
        errorMsg: "Le mot de passe est requis"
      })
      return
    }

    this.setState({
      successMsg: null,
      errorMsg: null,
      isLoading: true
    })

    this.props.onLogin(this.state.email, this.state.password)
  }

  const onPasswordForgotSubmit = (target) => {
    target.preventDefault()

    if (this.state.email.trim().length === 0) {
      this.setState({
        successMsg: null,
        errorMsg: "L'email est requis"
      })
      return
    }

    this.setState({
      successMsg: null,
      errorMsg: null,
      isLoading: true
    })

    usersAPI.postForgotPassword(
      this.state.email
    ).then(resp => {
      this.setState({
        successMsg: resp.data.message,
        errorMsg: null,
        isLoading: false
      })
    }).catch(error => {
      this.setState({
        successMsg: null,
        errorMsg: getErrorMsgFromSymfonyResponse(error),
        isLoading: false
      })
    })
  }

  const onPasswordResetSubmit = (target) =>{
    target.preventDefault()

    if (this.state.password === '' || this.state.passwordConfirmation === ''){
      this.setState({
        successMsg: null,
        errorMsg: 'Les deux champs sont requis'
      })
      return
    }

    if (this.state.password !== this.state.passwordConfirmation){
      this.setState({
        successMsg: null,
        errorMsg: 'Les mots de passe ne sont pas identiques'
      })
      return
    }

    this.setState({
      successMsg: null,
      errorMsg: null,
      isLoading: true
    })

    usersAPI.postResetPassword(
      this.state.token,
      this.state.password
    ).then(resp => {
      this.setState({
        successMsg: resp.data.message,
        errorMsg: null,
        isLoading: false
      })
    }).catch(error => {
      this.setState({
        successMsg: null,
        errorMsg: getErrorMsgFromSymfonyResponse(error),
        isLoading: false
      })
    })
  }

  return (
    <>
      <form onSubmit={this.onLoginSubmit}>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder="Mot de passe"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="Login-actions">
          <Link to="/password-forgot">Mot de passe oublié ?</Link>
        </div>

        <button type="submit">
          <span>Accéder à mes informations</span>
        </button>
      </form>

      <form onSubmit={event => this.onPasswordForgotSubmit(event)} >
        <div>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <Link to="/login">Connexion</Link>
        </div>
        <button type="submit">
          <span>Réinitialiser mon mot de passe</span>
        </button>
      </form>

      {this.props.mode === 'password_reset' &&
        <form onSubmit={event => this.onPasswordResetSubmit(event)}>
          <div>
            <input
              type='password'
              placeholder="Nouveau mot de passe"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <input
              type='password'
              placeholder="Répéter le mot de passe"
              onChange={e => this.setState({ passwordConfirmation: e.target.value })}
            />
          </div>
          <div className="Login-actions">
            <Link to="/login">Connexion</Link>
          </div>
          <button type="submit">
            <span>Réinitialiser mon mot de passe</span>
          </button>
        </form>
      }
    </>
  )

}

Login.propTypes = {
  mode: PropTypes.string.isRequired,
  onLogin: PropTypes.func.isRequired,
  loginErrorMsg: PropTypes.string
}

export default withRouter(Login)
