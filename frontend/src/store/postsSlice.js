import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'postsData',
    initialState: {
        posts: null,
    },
    reducers: {
        login: (state, action) => {
            state.posts = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login } = postsSlice.actions
export const selectPosts = (state) => state.postsData.posts;
export default postsSlice.reducer