import { combineReducers } from 'redux'
import authReducer from './auth/authReducer'
import snackbarReducer from './snackbar/snackbarReducer'

const rootReducer = combineReducers({
  authReducer,
  snackbarReducer
})

export default rootReducer