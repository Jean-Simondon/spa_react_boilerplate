export const ADD_MESSAGE = 'SNACKBAR_ADD_MESSAGE'
export const REMOVE_MESSAGE = 'SNACKBAR_REMOVE_MESSAGE'

export const addSnackMessage = (severity, content) => ({
  type: ADD_MESSAGE,
  message: {
    severity,
    content
  }
})

export const removeSnackMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
})