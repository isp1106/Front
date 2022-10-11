import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../api/baseQuery'

export const questionApi = createApi({
  reducerPath: 'questionApi',
  baseQuery,
  endpoints: (builder) => ({
    //카드 상품 불러오기
    getQuestions: builder.query({
      // query: () => '/customers/question',
      query: () => 'customers/questions',
    }),
    getQustion: builder.query({
      query: (id) => `customers/questions/${id}`,
    }),
    addQuestion: builder.mutation({
      query: (data) => {
        console.log('data', data)
        return {
          url: `customers/questions/1`,
          method: 'POST',
          body: data,
        }
      },
    }),
  }),
})

export const {
  useGetQuestionsQuery,
  useGetQustionQuery,
  useAddQuestionMutation,
} = questionApi
