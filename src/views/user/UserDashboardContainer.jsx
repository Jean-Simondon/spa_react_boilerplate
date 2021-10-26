import { connect } from 'react-redux'
import UserDashboard from './UserDashboard'
import {logout} from "../../redux/auth/authActions";

const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    user: state.authReducer.user,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard)