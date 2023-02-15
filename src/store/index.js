import { configureStore } from '@reduxjs/toolkit'
import collection from './modules/collection'

export const store = configureStore({
  reducer: {
    collection
  },
})
