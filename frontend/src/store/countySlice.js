import { createSlice } from '@reduxjs/toolkit'

export const countySlice = createSlice({
    name: 'county',
    initialState: {
        selected: null,
    },
    reducers: {
        selectCounty: (state, action) => {
            state.selected = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { selectCounty } = countySlice.actions
export const getCountySelected = (state) => state.county.selected;
export default countySlice.reducer