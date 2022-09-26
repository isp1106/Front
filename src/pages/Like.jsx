import React from 'react'
import HeaderLink from '../components/layout/Header/HeaderLink'
import Liked from '../components/Liked'

const Like = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-5 h-[66px]">
        <div className="text-xl font-bold">찜</div>
        <HeaderLink />
      </div>
      <Liked />
    </div>
  )
}

export default Like
