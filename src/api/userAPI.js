import axiosInstance from './axiosInstance'

const userAPI = {
  
  getToken(username, password) {
    return axiosInstance.post('/login_check', {
      username, // username alors que password car c'est ainsi pour la sécurité de symfony
      password
    })
  },

  signin(name, email, plainPassword) {
    return axiosInstance.post('/profile/new', {
      name,
      email,
      plainPassword
    })
  },

  postForgotPassword(email) {
    return axiosInstance.post('/security/forgot-password', {
      email
    })
  },

  postResetPassword(token, plainPassword) {
    return axiosInstance.post('/security/reset-password', {
      token,
      plainPassword
    })
  },

  getProfile(token) {
    return axiosInstance.get('/profile', {
      headers: {
        Authorization:`Bearer ${token}`
      }
    })
  },

  createUser(name, email, plainPassword) {
    return axiosInstance.post('/profile/new', {
      email,
      name,
      plainPassword
    })
  },

}

export default userAPI
