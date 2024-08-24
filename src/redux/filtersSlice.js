import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    onFilter: (state, action) => {
      state.name = action.payload
    },
  },
})

export const filtersReducer = slice.reducer
export const { onFilter } = slice.actions
export const selectFilter = (state) => state.filters.name
