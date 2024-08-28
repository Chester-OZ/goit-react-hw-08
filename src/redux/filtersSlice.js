import { createSlice } from '@reduxjs/toolkit'
// import { selectContacts } from './contactsSlice'

const slice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeFilter } = slice.actions
export const filtersReducer = slice.reducer
export const selectNameFilter = (state) => state.filter.name
