import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
}

export default connect(
  mapStateToProps
)(App)