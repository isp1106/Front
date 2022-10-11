// 프론트에서 저장할 부분
import { createSlice } from '@reduxjs/toolkit'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const [cookies, setCookie, removeCookie] = useCookies()
const navigate = useNavigate()

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, refreshToken } = action.payload
      state.user = user
      setCookie('accessToken', accessToken, { path: '/' })
      setCookie('refreshToken', refreshToken, { path: '/' })
    },
    logOut: (state, action) => {
      state.user = null
      removeCookie('accessToken')
      removeCookie('refreshToken')
      navigate(0) // 새로고침
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentAccessToken = cookies.accessToken
export const selectCurrentRefreshToken = cookies.refreshToken
