import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = `https://66cd76858ca9aa6c8cca6618.mockapi.io/`

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data: contacts } = await axios('contacts')
      return contacts
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data: newContact } = await axios.post('contacts', contact)
      return newContact
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      await axios.delete(`contacts/${contactID}`)
      return contactID
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
