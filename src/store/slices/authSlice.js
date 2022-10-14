// 프론트에서 저장할 부분
import { createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken, refreshToken } = action.payload
      state.user = username
      cookie.set('accessToken', accessToken, { path: '/' })
      cookie.set('refreshToken', refreshToken, { path: '/' })
    },
    logOut: (state, action) => {
      const navigate = useNavigate()
      state.user = null
      cookie.remove('accessToken')
      cookie.remove('refreshToken')
      navigate(0) // 새로고침
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
