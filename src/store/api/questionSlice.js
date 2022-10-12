import { apiSlice } from '../api/baseQuery'

export const questionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => 'customers/questions',
    }),
    getQustion: builder.query({
      query: (id) => `customers/questions/${id}`,
    }),
    addQuestion: builder.mutation({
      query: (data) => {
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
