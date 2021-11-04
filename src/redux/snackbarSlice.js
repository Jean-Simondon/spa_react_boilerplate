import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentMessageId: 0,
    messages: []
}

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        addSnackMessage(state, action) {
            const msgId = state.currentMessageId + 1;
            state.currentMessageId = msgId;
            state.messages = [ ...state.messages, { id: msgId, severity: action.severity, content: action.content }]
        },
        removeSnackMessage(state, action) {
            state.messages = state.messages.filter(msg => msg.id !== action.messageId)
        },
    }
})

export const snackbarActions = snackbarSlice.actions

export default snackbarSlice.reducer