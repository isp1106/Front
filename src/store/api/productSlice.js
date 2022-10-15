import { apiSlice } from '../api/apiSlice'

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getSimpleProducts: builder.query({
      query: (queryString) => ({
        url: `/products/list?${queryString}`,
        method: 'POST',
      }),
    }),
    getLikedList: builder.query({
      query: () => ({
        url: '/favorites',
      }),
    }),
    addLike: builder.mutation({
      url: '/favorites',
      method: 'POST',
    }),
  }),
})

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetSimpleProductsQuery,
  useAddLikedListMutation,
} = productApi
