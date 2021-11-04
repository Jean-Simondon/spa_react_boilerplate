import { connect } from 'react-redux'
import snackMsgAction from '../../redux/snackbarSlice'

const mapDispatchToProps = dispatch => ({
  snackMsg: (severity, content) => dispatch(snackMsgAction.addSnackMessage(severity, content))
})

export default function withSnackbar(Component) {
  return connect(null, mapDispatchToProps)(Component)
}