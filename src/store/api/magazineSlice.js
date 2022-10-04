import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const magazineApi = createApi({
  reducerPath: 'magazineApi',
  // baseQuery,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getMagazines: builder.query({
      query: () => 'magazines',
    }),
    getMagazine: builder.query({
      query: (id) => `magazines/${id}`,
    }),
  }),
})

export const { useGetMagazineQuery, useGetMagazinesQuery } = magazineApi
