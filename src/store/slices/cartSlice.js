import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// import { apiSlice } from '../api/apiSlice'
// const apiWithTags = apiSlice.enhanceEndpoints({ addTagTypes: ['Cart'] })

// export const cartApiSlice = apiWithTags.injectEndpoints({
export const cartApi = createApi({
  reducerPath: 'cartApi',
  // baseQuery,
  tagTypes: ['Carts'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getCartItems: builder.query({
      query: () => 'cart',
      providesTags: ['Carts'],
    }),
    deleteCartItem: builder.mutation({
      query: ({ data }) => ({
        url: 'posts',
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Cart'],
    }),
    changeCount: builder.mutation({
      query: ({ data }) => ({
        url: 'posts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
})

export const {
  useGetCartItemsQuery,
  useDeleteCartItemMutation,
  useChangeCountMutation,
} = cartApi
