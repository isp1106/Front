import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../api/baseQuery'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getQuestions: builder.query({
      // query: () => '/customers/question',
      query: () => 'question',
    }),
    getQustion: builder.query({
      query: (id) => `question/${id}`,
    }),
    addQuestion: builder.mutation({
      query: ({ data }) => ({
        url: `customers/questions/1`,
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      }),
    }),
  }),
})

export const {
  useGetQuestionsQuery,
  useGetQustionQuery,
  useAddQuestionMutation,
} = questionApi
