import React from 'react'

const UserInfo = () => {
  return (
    <div className="px-5 pb-5 flex flex-wrap items-center border-b-[1px] border-primary">
      <div className="w-10 h-10 rounded-full bg-[#ebebeb] mr-[1.125rem]">
        <img src="" alt="" />
      </div>
      <div className="flex-auto">
        <span className="block font-medium">User ID</span>
        <span className="block font-medum text-sm">2시간 전</span>
      </div>
      <button className="flex-none bg-primary w-[4.563rem] h-10 text-white font-medium">
        팔로우
      </button>
    </div>
  )
}

export default UserInfo
