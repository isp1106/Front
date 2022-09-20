import React from 'react'
import Button from '../components/common/Button'
import MyPageSegment from '../components/MyPageSegment'
const MyPage = () => {
  return (
    <div>
      <MyPageSegment />
      <Button classprop="text-sm mx-5 mt-9 mb-5 bg-primary text-white">로그아웃</Button>
    </div>
  )
}

export default MyPage
