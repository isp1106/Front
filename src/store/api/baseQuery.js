import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import {
  setCredentials,
  logOut,
  // selectCurrentAccessToken,
  // selectCurrentRefreshToken,
} from '../slices/authSlice'
// import { useCookies } from 'react-cookie'
import { Cookies } from 'react-cookie'
// const [cookies, setCookie, removeCookie] = useCookies()
const { VITE_BASE_URL } = import.meta.env
const cookies = new Cookies()
export const baseQuery = fetchBaseQuery({
  baseUrl: VITE_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    // const [cookies, setCookie, removeCookie] = useCookies()
    // const token = cookies.accessToken
    const token = cookies.get('accessToken')
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  console.log('result', result)
  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    // const [cookies, setCookie, removeCookie] = useCookies()
    const refreshResult = await baseQuery(
      {
        url: '/auth/reissue',
        method: 'POST',
        body: {
          // accessToken: cookies.accessToken,
          // refreshToken: cookies.refreshToken,
          accessToken: cookies.remove('accessToken'),
          refreshToken: cookies.remove('refreshToken'),
        },
      },
      api,
      extraOptions,
    )
    console.log(refreshResult)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  } else if (
    result?.error?.originalStatus === 500
    // result?.error?.msg === '서버 에러가 발생했습니다. 고객센터로 문의 바랍니다.'
  ) {
    console.log('500')
    api.dispatch(logOut())
  } else {
    console.log(result)
    throw new Error()
  }

  return result
}
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_BASE_URL2,
//   credentials: 'include',
//   prepareHeaders: (headers) => {
//     // const accessToken = getCookie('accessToken')
//     if (true) {
//       headers.set(
//         'Authorization',
//         `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NTU1NTI4NH0.qjCOA5Be3N_wN1WIvfIfH4LAquEjQZs77D0osHKwXcWkJZ3WvaSutLD49ymYdJY1SNs54zjLrvp3GbMniGHLMQ`,
//       )
//     }
//     return headers
//   },
// })

// export const apiSlice = createApi({
//   baseQuery,
//   endpoints: (builder) => ({}),
// })
