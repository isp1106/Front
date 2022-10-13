import { apiSlice } from '../api/apiSlice'

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query({
      query: (data) => ({
        url: 'tags',
        method: 'Get',
        body: data,
      }),
    }),
  }),
})

export const { useGetTagsQuery } = categoryApi
