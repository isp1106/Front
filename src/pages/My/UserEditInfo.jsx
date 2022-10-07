import React from 'react'
import UserInfoPage from '~/components/My/EditUserInfo'
import Header from '../../components/layout/Header'

const UserEditInfo = () => {
  return (
    <>
      <Header>내 정보 관리</Header>
      <div className="pt-[65px]">
        <UserInfoPage />
      </div>
    </>
  )
}

export default UserEditInfo
