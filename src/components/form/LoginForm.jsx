import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { login, signin } from '../../redux/authSlice';
// import { getErrorMsgFromSymfonyResponse } from '../../../utils/helpers'

const LoginForm = (props) => {

  const dispatch = useDispatch();
  // let history = useHistory();

  // const loginErrorMsg = useSelector(state => state.auth.loginErrorMsg)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');

  const onFormSubmit = (target) => {
    target.preventDefault()

    let isFormValid = true;

    // nom d'utilisateur requis pour la création de l'utilisateur
    if (props.mode === "signin" && firstname.trim().length === 0) {
      setFirstnameError("Le nom d'utilisateur est requis");
      isFormValid = false;
    } else {
      setFirstnameError('');
    }

    // vérifier la forme de l'adresse
    if (email.trim().length === 0) {
      setEmailError("L'email est requis");
      isFormValid = false;
    } else {
      setEmailError('');
    }

    // password requis si création ou authentification
    if ((props.mode === "login" || props.mode === "sigin") && password.trim().length === 0) {
      setPasswordError("Le mot de passe est requis");
      isFormValid = false;
    } else {
      setPasswordError('');
    }

    if (isFormValid) {

      if (props.mode == "login") {
        dispatch(login({ email, password }));
      } else if (props.mode == "signin") {
        dispatch(signin({ firstname, lastname, email, password }))
      } else if (props.mode == "forget-password") {
        console.log("test forget password")
      } else if (props.mode == "reset-password") {
        console.log("test reset password")
      }

    }

  }

  // const onPasswordForgotSubmit = (target) => {
  //   target.preventDefault()

  //   if (this.state.email.trim().length === 0) {
  //     this.setState({
  //       successMsg: null,
  //       errorMsg: "L'email est requis"
  //     })
  //     return
  //   }

  //   this.setState({
  //     successMsg: null,
  //     errorMsg: null,
  //     isLoading: true
  //   })

  //   userAPI.postForgotPassword(
  //     this.state.email
  //   ).then(resp => {
  //     this.setState({
  //       successMsg: resp.data.message,
  //       errorMsg: null,
  //       isLoading: false
  //     })
  //   }).catch(error => {
  //     this.setState({
  //       successMsg: null,
  //       errorMsg: getErrorMsgFromSymfonyResponse(error),
  //       isLoading: false
  //     })
  //   })

  //   // push vers home

  // }

  // const onPasswordResetSubmit = (target) => {
  //   target.preventDefault()

  //   if (this.state.password === '' || this.state.passwordConfirmation === ''){
  //     this.setState({
  //       successMsg: null,
  //       errorMsg: 'Les deux champs sont requis'
  //     })
  //     return
  //   }

  //   if (this.state.password !== this.state.passwordConfirmation){
  //     this.setState({
  //       successMsg: null,
  //       errorMsg: 'Les mots de passe ne sont pas identiques'
  //     })
  //     return
  //   }

  //   this.setState({
  //     successMsg: null,
  //     errorMsg: null,
  //     isLoading: true
  //   })

  //   userAPI.postResetPassword(
  //     this.state.token,
  //     this.state.password
  //   ).then(resp => {
  //     this.setState({
  //       successMsg: resp.data.message,
  //       errorMsg: null,
  //       isLoading: false
  //     })
  //   }).catch(error => {
  //     this.setState({
  //       successMsg: null,
  //       errorMsg: getErrorMsgFromSymfonyResponse(error),
  //       isLoading: false
  //     })
  //   })

  //   // snackMessage et redirection ?

  // }

  const onChangeFirstnameHandler = (event) => {
    setFirstname(event.target.value);
  }
  const onChangeLastnameHandler = (event) => {
    setLastname(event.target.value);
  }
  const onChangeEmailHandler = (event) => {
    setEmail(event.target.value);
  }
  const onChangePasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      {props.mode === 'login' &&
        <form onSubmit={onFormSubmit}>

          <div>
            <input
              type="text"
              placeholder="Adresse email"
              value={email}
              onChange={onChangeEmailHandler}
              autoComplete="on"
            />
            <small>{emailError}</small>
          </div>

          <div>
            <input
              type='password'
              placeholder="Mot de passe"
              value={password}
              onChange={onChangePasswordHandler}
              autoComplete="on"
            />
            <small>{passwordError}</small>
          </div>

          <button type="submit">
            <span>Connexion</span>
          </button>

          <div>
            <Link to="/signin">Pas encore inscrit ?</Link>
          </div>

        </form>
      }

      {props.mode === 'signin' &&
        <form onSubmit={onFormSubmit}>

          <div>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={firstname}
              onChange={onChangeFirstnameHandler}
              autoComplete="on"
            />
            <small>{firstnameError}</small>
          </div>

          <div>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={lastname}
              onChange={onChangeLastnameHandler}
              autoComplete="on"
            />
            <small>{lastnameError}</small>
          </div>

          <div>
            <input
              type="text"
              placeholder="Adresse email"
              value={email}
              onChange={onChangeEmailHandler}
              autoComplete="on"
            />
            <small>{emailError}</small>
          </div>

          <div>
            <input
              type='password'
              placeholder="Mot de passe"
              value={password}
              onChange={onChangePasswordHandler}
              autoComplete="on"
            />
            <small>{passwordError}</small>
          </div>

          <button type="submit">
            <span>Inscription</span>
          </button>

          <div>
            <Link to="/login">Retour</Link>
          </div>

        </form>
      }


      {/* Oublie de mot de passe  */}
      {/* <form onSubmit={event => this.onPasswordForgotSubmit(event)} >
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
      </form> */}

      {/* renouvellement de mot de passe */}
      {/* {mode === 'password_reset' &&
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
      } */}
    </>
  )

}

export default LoginForm
