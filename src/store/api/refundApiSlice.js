import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const refundApi = createApi({
  reducerPath: 'refundApi',
  // baseQuery,
  tagTypes: ['Refunds'],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    //환불 상품 불러오기
    getRefundItems: builder.query({
      query: () => 'refunds',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Refunds', id })), 'Refunds']
          : ['Refunds'],
    }),
  }),
})

export const { useGetRefundItemsQuery } = refundApi
