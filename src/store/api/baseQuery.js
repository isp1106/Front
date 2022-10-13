import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL2,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const accessToken = getCookie('accessToken')
    if (true) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTY5MDAwNX0.xZgTC0n0ByQa6C1LOqBO1LPAWlAlI7vTcFFdm5I57uMGbfCXqIbLqVhOn8efmJerhgIFOuw0RdTzILf9QBjvIQ`,
      )
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
})
