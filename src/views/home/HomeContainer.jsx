import { connect } from 'react-redux'
import Home from './Home'

import { logout } from '../../redux/auth/authActions'

const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    token: state.authReducer.token,
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)