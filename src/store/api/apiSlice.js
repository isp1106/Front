//기본 createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQuery'

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
})

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_BASE_URL,
//   credentials: 'include',
//   prepareHeaders: (headers) => {
//     const accessToken = getCookie('accessToken')
//     if (accessToken) {
//       headers.set('Authorization', `Bearer ${accessToken}`)
//     }
//     return headers
//   },
// })

// export const apiSlice = createApi({
//   baseQuery,
//   endpoints: (builder) => ({}),
// })
