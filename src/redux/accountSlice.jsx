import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
    }
})

export const accountActions = accountSlice.action

export default accountSlice.reducers