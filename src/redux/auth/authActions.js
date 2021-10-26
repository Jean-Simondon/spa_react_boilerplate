import {
  LOGIN_POST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from './authActionsTypes'

export const loginPost = (email, password) => ({
  type: LOGIN_POST,
  email,
  password
})

export const loginSuccess = (email, token, user) => ({
  type: LOGIN_SUCCESS,
  email,
  token,
  user
})

export const loginError = (errorMsg) => ({
  type: LOGIN_ERROR,
  errorMsg
})

export const logout = () => ({
  type: LOGOUT
})
