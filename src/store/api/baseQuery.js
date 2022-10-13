import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL2,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const accessToken = getCookie('accessToken')
    if (true) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTY5MzU4M30.divz0-fagumpL7NDCuUUCiWh5owRv-tEE59dr77EVlhs4DyTCkW-YXbOgr2T9O7ZcQHq-crGagCAuRJQ71S5ag`,
      )
    }
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: (builder) => ({}),
})
