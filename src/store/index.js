import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from './api/cartApiSlice'
import { magazineApi } from './api/magazineSlice'

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [magazineApi.reducerPath]: magazineApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cartApi.middleware, magazineApi.middleware]),
})

setupListeners(store.dispatch)
