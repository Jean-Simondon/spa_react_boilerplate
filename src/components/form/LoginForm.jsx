import React, { useState, useRef, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { login, signin } from '../../redux/authSlice'
import styled from 'styled-components'
// import { getErrorMsgFromSymfonyResponse } from '../../../utils/helpers'

import styles from './css/form.module.scss'

// const Button = styled.button`
//     color: blue;
//     background-color: ${props => ( props.invalid ? 'red' : 'blue')};
    
//     /* @media (max-width: 760px) {
//       width: 400px;
//     } */

//     &:hover {
//       box-shadow: 4px 4px 10px;
//     }
//   `;

const formReducer = (state, action) => {
  switch(action.type) {
    case 'EMAIL_INPUT':
      return { value: '', isValid: false }
      break;
    case 'PASSWORD_INPUT':
      return { value: '', isValid: false }
      break;
    default:
      return { value: '', isValid: false }
  }
};



const LoginForm = (props) => {

  const dispatch = useDispatch();
  const emailInputRef = useRef();

  const [ formIsValid, setFormIsValid ] = useState(false);
  const [ isValid, setIsValid ] = useState(false);

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

  /**
   * Bad practice, using other state to validate some other sate
   * like valid form from state value
   * if update a state depending on another state, useReducer()
   */
  const [ emailState, dispatchForm ] = useReducer( formReducer, { value: '', isValid: false })
  // use emailStat.isValid
  // dispatchForm({ type: 'USER_INPUT', value: email });


  // const { isValid, emailIsValid } = emailState;
  // const { isValid, passwordIsValid } = passwordState;
  // end use the property in useEffect dependency

 
  useEffect(() => {
    // Deboucing : run only after 500ms without side effect
    const identifier = setTimeout(() => {
      setFormIsValid( email.includes('@') && password.trim().length > 6 )
    }, 500);
     // do not run for the very first sideEffect, 
    return () => {
      clearTimeout(identifier);
    };
  }, [email, password]); // in dependencies, do not add what is state updateing function like set...


  /**
   * add : wasTouched
   * loosed focus
   * 
   */


  const onFormSubmit = (target) => {
    target.preventDefault()

    let isFormValid = true;

    console.log(emailInputRef.current.value); // only to read value 

    // nom d'utilisateur requis pour la création de l'utilisateur
    if (props.mode === "signin" && firstname.trim().length === 0) {
      setFirstnameError("Le nom d'utilisateur est requis");
      isFormValid = false;
    } else {
      // setFirstnameError( prevState => prevState);
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
            <label htmlFor="email" ></label>
            <input
              id="email"
              // className={`form-control ${!isValid ? 'invalid' : ''}`}
              className={!isValid && ' old-invalid'}
              type="text"
              placeholder="Adresse email"
              value={email}
              onChange={onChangeEmailHandler}
              autoComplete="on"
              ref={emailInputRef}
            />
            <small>{emailError}</small>
          </div>

          <div>
            <input
              type='password'
              placeholder="Mot de passe"
              style={{color: !isValid ? 'red' : 'black'}}
              value={password}
              onChange={onChangePasswordHandler}
              autoComplete="on"
            />
            <small>{passwordError}</small>
          </div>

          <button
            className={`${styles['old-button']} ${ !isValid && styles.invalid }`}
            type="submit"
            // invalid={isValid}
          >
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
              style={{color: !isValid ? 'red' : 'black'}}
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
              style={{color: !isValid ? 'red' : 'black'}}
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
              style={{color: !isValid ? 'red' : 'black'}}
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
              style={{color: !isValid ? 'red' : 'black'}}
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
