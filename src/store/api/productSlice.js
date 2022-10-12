import { apiSlice } from '../api/baseQuery'

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductQuery } = productApi
