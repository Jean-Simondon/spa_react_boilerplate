import { connect } from 'react-redux'
import Login from './Login'

import { loginPost} from '../redux/auth/authActions'

const mapStateToProps = (state, ownProps) => {
  return {
    mode: ownProps.mode,
    loginErrorMsg: state.authReducer.loginErrorMsg,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (email, password) => dispatch(loginPost(email, password))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)