import { put, takeLatest } from 'redux-saga/effects'

import usersAPI from '../../api/usersAPI'
import { LOGIN_POST, LOGOUT} from './authActionsTypes'
import { loginSuccess, loginError} from './authActions'

function* loginPost(action) {
  try {
    const resp = yield usersAPI.postLogin(
      action.email,
      action.password
    )

    const profileResp = yield usersAPI.getProfile(resp.data.token)

    localStorage.setItem('auth', JSON.stringify({
      email: action.email,
      token: resp.data.token,
      user: profileResp.data,
    }))

    yield put(loginSuccess(action.email, resp.data.token, profileResp.data))

  } catch (error) {
    yield put(loginError(error.response.data.message))
  }
}

function* logout() {
  localStorage.removeItem('auth')
  yield
}

const authSagas = [
  takeLatest(LOGIN_POST, loginPost),
  takeLatest(LOGOUT, logout)
]

export default authSagas