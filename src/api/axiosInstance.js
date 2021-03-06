import axios from 'axios'
import store from '../redux/store'
import { authActions } from '../redux/authSlice'

let URL_API = "http://localhost:8000/api";

if ( URL_API === "" ) {
  console.warn('Env variable REACT_APP_API_URL is not defined')
}

const axiosInstance = axios.create({
  baseURL: URL_API
})

axiosInstance.interceptors.request.use(config => {
  const state = store.getState()  
  if (state.auth.token != null) {
    config.headers.Authorization = `Bearer ${state.auth.token}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  resp => resp,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(authActions.logout())
    }
    return Promise.reject(error)
  }
)

export default axiosInstance