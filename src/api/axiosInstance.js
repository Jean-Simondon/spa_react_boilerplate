import axios from 'axios'

import store from '../redux/store'
import { logout } from '../redux/auth/authActions'

const process = {
  env: {
    REACT_APP_API_URL: "http://localhost:8000/api"
  },
}

if (process.env.REACT_APP_API_URL === undefined) {
  console.warn('Env variable REACT_APP_API_URL is not defined')
}

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

axiosInstance.interceptors.request.use(config => {
  const state = store.getState()

  if (state.authReducer.token != null) {
    config.headers.Authorization = `Bearer ${state.authReducer.token}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  resp => resp,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout())
    }
    return Promise.reject(error)
  }
)

export default axiosInstance