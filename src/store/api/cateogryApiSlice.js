import { apiSlice } from '../api/baseQuery'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: (id) => `tags/${id}`,
    }),
  }),
})

export const { useGetTagsQuery } = categoryApi
