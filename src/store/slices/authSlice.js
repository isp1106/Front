// 프론트에서 저장할 부분
import { createSlice } from '@reduxjs/toolkit'
// import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload
      // const [cookies, setCookie, removeCookie] = useCookies()
      state.user = user
      // setCookie('accessToken', accessToken, { path: '/' })
      // setCookie('refreshToken', refreshToken, { path: '/' })
      cookie.set('accessToken', accessToken, { path: '/' })
      cookie.set('refreshToken', refreshToken, { path: '/' })
    },
    logOut: (state, action) => {
      // const [cookies, setCookie, removeCookie] = useCookies()
      const navigate = useNavigate()
      state.user = null
      // removeCookie('accessToken')
      // removeCookie('refreshToken')
      cookie.remove('accessToken')
      cookie.remove('refreshToken')
      navigate(0) // 새로고침
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
// export const selectCurrentAccessToken = cookies.accessToken
// export const selectCurrentRefreshToken = cookies.refreshToken
