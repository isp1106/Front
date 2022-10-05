import React from 'react'
import Button from '../../components/common/Button'
import MyPageSegment from '../../components/My/MyPageSegment'
const MyPage = () => {
  const logoutHandler = () => {
    //로그아웃 api작성 예정
    console.log('logout!!')
  }
  return (
    <>
      <div>
        <MyPageSegment />
        <Button
          onClick={logoutHandler}
          classprop="text-sm mx-5 mt-9 mb-5 bg-primary text-white"
        >
          로그아웃
        </Button>
      </div>
    </>
  )
}

export default MyPage
