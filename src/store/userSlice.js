import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
    token: window.localStorage.getItem('user_token_nasa'),
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload
            window.localStorage.setItem('user_token_nasa', action.payload)
        },
        logout: (state) => {
            window.localStorage.removeItem('user_token_nasa')
            state.token = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { register, login, logout } = userSlice.actions

export default userSlice.reducer