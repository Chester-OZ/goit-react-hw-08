import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './contactsSlice'
import { filtersReducer } from './filtersSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const contactPersistConfig = {
  key: 'contact',
  storage,
  version: 1,
}

const persistedContactReducer = persistReducer(
  contactPersistConfig,
  contactsReducer
)

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
