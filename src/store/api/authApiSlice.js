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
    findID: builder.mutation({
      query: (credentials) => ({
        url: '/sendUsername',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    findPW: builder.mutation({
      query: (credentials) => ({
        url: '/newPwd',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useSignupMutation,
  useFindIDMutation,
  useFindPWMutation,
  useCheckEmailMutation,
} = authApiSlice
