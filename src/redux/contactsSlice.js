import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '+380974591256' },
    { id: 'id-2', name: 'Hermione Kline', number: '+380964438912' },
    { id: 'id-3', name: 'Eden Clements', number: '+380966451779' },
    { id: 'id-4', name: 'Annie Copeland', number: '+380972279126' },
  ],
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload)
      },
      prepare: (contact) => {
        return { payload: { ...contact, id: nanoid() } }
      },
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const contactsReducer = slice.reducer
export const { addContact, deleteContact } = slice.actions
export const selectContacts = (state) => state.contacts.items
