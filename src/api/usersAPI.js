import axiosInstance from './axiosInstance'

const usersAPI = {
  postLogin(username, password) {
    return axiosInstance.post('/login_check', {
      username,
      password
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

  getCustomer(customerId) {
    return axiosInstance.get(`/gk/customers/${customerId}`)
  },

  getCustomers() {
    return axiosInstance.get('/gk/customers')
  },

  searchCustomers(search) {
    return axiosInstance.get(`/gk/customers/search`, { params: { search } })
  },

  patchCustomer(customerId, data) {
    return axiosInstance.patch(`/gk/customers/${customerId}`, data)
  },

  getEmployeesByTeam(team) {
    return axiosInstance.get(`/gk/users/employees/${team}`)
  },

  getCurrent() {
    return axiosInstance.get(`/gk/users/current`)
  },

  postSendAccess(projectId) {
    return axiosInstance.post(`/security/send-access/${projectId}`, {})
  },
}

export default usersAPI
