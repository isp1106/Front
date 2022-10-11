import {
  setCredentials,
  logOut,
  selectCurrentAccessToken,
  selectCurrentRefreshToken,
} from '../../features/auth/authSlice'

const { VITE_BASE_URL } = import.meta.env
export const baseQuery = fetchBaseQuery({
  baseUrl: VITE_BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = selectCurrentAccessToken
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      {
        url: '/auth/reissue',
        method: 'POST',
        body: {
          accessToken: selectCurrentAccessToken,
          refreshToken: selectCurrentRefreshToken,
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
  }

  return result
}
