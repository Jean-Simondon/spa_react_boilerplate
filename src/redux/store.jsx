import { configureStore } from '@reduxjs/toolkit'

// reducer
import authReducer from './authSlice'
import snackbarReducer from './snackbarSlice'

// middleware
// import monitorReducerEnhancer from './enhancers/monitorReducer'
// import loggerMiddleware from './middleware/logger'

// initial state
// const preloadedState = {}

// store creation
const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackbarReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // .concat(loggerMiddleware),
  // .contat(monitorReducerEnhancer),
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState,
  // enhancers: [reduxBatch],
})

export default store

