import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL2,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const accessToken = getCookie('accessToken')
    if (true) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTYwMDg0M30.PrRc5PXtVObrscizZH8Gi0sglbaYRMqVpQe0O_Ez1Ph1Ro9GXGuoJ2qh_mv8_YP-GGQEDV3atuS4aEeI7JLIkg`,
      )
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
})
