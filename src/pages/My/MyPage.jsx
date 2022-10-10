import React from 'react'
import { Outlet } from 'react-router-dom'
const MyPage = () => {
  const logoutHandler = () => {
    //로그아웃 api작성 예정
    console.log('logout!!')
  }
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default MyPage
