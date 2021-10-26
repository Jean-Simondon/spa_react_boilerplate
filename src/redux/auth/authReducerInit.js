export default function authReducerInit() {
  try {
    const stored = JSON.parse(localStorage.getItem('auth'))

    return {
      isLoggedIn: true,
      loginErrorMsg: null,
      email: stored.email,
      token: stored.token,
      user: stored.user
    }
  } catch {
    return {
      isLoggedIn: false,
      loginErrorMsg: null,
      email: null,
      token: null,
      user: null
    }
  }
}