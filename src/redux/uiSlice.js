import { createSlice } from '@reduxjs/toolkit';

// give uiSlice.reducer to combineReducer
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        saveButtonStructure: false,
    },
    reducers: {
        showStructureSaveButton(state) {
            state.saveButtonStructure = true;
        },
        hideStructureSaveButton(state) {
            state.saveButtonStructure = false;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;




// const store = configureStore({
//     reducer: {
//         book: bookReducer,
//         ui: uiReducer,
//     }
// });