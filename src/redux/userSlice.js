import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    }
})

export const userActions = userSlice.action

export default userSlice.reducers