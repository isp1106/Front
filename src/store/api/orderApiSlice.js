import { apiSlice } from '../api/apiSlice'

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useAddOrdersMutation } = orderApi
