import { connect } from 'react-redux'
import { addSnackMessage } from '../../redux/snackbar/snackbarActions'

const mapDispatchToProps = dispatch => ({
  snackMsg: (severity, content) => dispatch(addSnackMessage(severity, content))
})

export default function withSnackbar(Component) {
  return connect(null, mapDispatchToProps)(Component)
}