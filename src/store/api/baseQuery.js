import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL2,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const accessToken = getCookie('accessToken')
    if (true) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTY4NTE5MX0.ZwlozZ67c0iK9e0vIIz4DimHMh0OyIfzLDT7h7LR6Q_QNJqNV3V1DBxFOZOBELfqSc6UHXHMen4qmRYJKZ2JcQ`,
      )
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
})
