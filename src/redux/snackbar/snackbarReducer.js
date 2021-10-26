import { ADD_MESSAGE, REMOVE_MESSAGE } from './snackbarActions'

const initialState = {
  currentMessageId: 0,
  messages: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const msgId = state.currentMessageId + 1

      return {
        ...state,
        currentMessageId: msgId,
        messages: [...state.messages, { id: msgId, ...action.message }]
      }
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(msg => msg.id !== action.messageId)
      }
    default:
      return state
  }
}

export default reducer