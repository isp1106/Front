import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL2,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const accessToken = getCookie('accessToken')
    if (true) {
      headers.set(
        'Authorization',
        `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTUwMTEzM30.a98Zi9AlRh0H76YUDJ0_g7dbJh0tCQZ89JnU7n5wlwIVSETUnzDUs2DfBB2vjOwF_ySIrqchG2obQ2JolhbOjQ`,
      )
    }
    return headers
  },
})
