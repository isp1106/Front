import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cartApi } from './api/cartApiSlice'
import { magazineApi } from './api/magazineSlice'
import { questionApi } from './api/questionSlice'
import { refundApi } from './api/refundApiSlice'
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import { apiSlice } from './api/apiSlice'

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [cartApi.reducerPath]: cartApi.reducer,
  [magazineApi.reducerPath]: magazineApi.reducer,
  [questionApi.reducerPath]: questionApi.reducer,
  [refundApi.reducerPath]: refundApi.reducer,
  user: userReducer,
  product: productReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      apiSlice.middleware,
      cartApi.middleware,
      magazineApi.middleware,
      questionApi.middleware,
      refundApi.middleware,
    ]),
})

setupListeners(store.dispatch)
