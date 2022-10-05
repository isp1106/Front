import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from './api/cartApiSlice'
import { magazineApi } from './api/magazineSlice'
import { questionApi } from './api/questionSlice'

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [magazineApi.reducerPath]: magazineApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cartApi.middleware,
      magazineApi.middleware,
      questionApi.middleware,
    ]),
})

setupListeners(store.dispatch)
