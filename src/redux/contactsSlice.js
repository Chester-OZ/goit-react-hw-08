import { createSlice, createSelector } from '@reduxjs/toolkit'
import { addContact, deleteContact, fetchContacts } from './contactsOps'
import { selectNameFilter } from './filtersSlice'

const initialState = {
  contacts: [],
  loading: false,
  error: null,
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false
        state.loading = true
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false
        state.contacts = action.payload
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false
        state.error = true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload)
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const contactsReducer = slice.reducer
export const selectContacts = (state) => state.contacts.contacts
export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
  }
)
