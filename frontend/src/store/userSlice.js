import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userData',
    initialState: {
        user: null,
        tokens: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        authorization: (state, action) => {
            state.tokens = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.tokens = null;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, authorization, logout } = userSlice.actions
export const selectUser = (state) => state.userData.user;
export const selectTokens = (state) => state.userData.tokens;
export default userSlice.reducer