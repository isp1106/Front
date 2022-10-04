<<<<<<< HEAD
//기본 createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQuery'
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
})
=======
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
>>>>>>> 559a89fd613b561d0cb3c772aa6caf2ff77061fc
