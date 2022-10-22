import { apiSlice } from './apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    checkEmail: builder.mutation({
      query: (body) => {
        console.log(body)
        return {
          url: '/checkEmail',
          method: 'PUT',
          body: body,
        }
      },
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useCheckEmailMutation } =
  authApiSlice
