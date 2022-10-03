import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  // baseQuery,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getQuestions: builder.query({
      query: () => 'question',
    }),
    getQustion: builder.query({
      query: (id) => `question/${id}`,
    }),
  }),
})

export const { useGetQuestionsQuery, useGetQustionQuery } = questionApi
