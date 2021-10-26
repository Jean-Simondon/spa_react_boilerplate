import { all } from '@redux-saga/core/effects'
import authSaga from './auth/authSagas'

export default function *rootSaga() {
  yield all([
    ...authSaga
  ])
}