import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './authActionsTypes'

const initialState = {
  isLoggedIn: false,
  loginErrorMsg: null,
  email: null,
  token: null,
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginErrorMsg: null,
        email: action.email,
        token: action.token,
        user: action.user
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        loginErrorMsg: action.errorMsg,
        email: null,
        token: null,
        user: null
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        loginErrorMsg: null,
        email: null,
        token: null,
        user: null
      }
    default:
      return state
  }
}

export default reducer