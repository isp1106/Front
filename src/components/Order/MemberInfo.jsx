import React from 'react'
import { useGetUserInfoQuery } from '../../store/api/userApiSlice'

const MemberInfo = () => {
  const { data } = useGetUserInfoQuery()
  console.log(data)
  const {
    username,
    email,
    firstName,
    lastName,
    phoneNumber,
    address,
    country,
    firstFurigana,
    lastFurigana,
  } = data
  return (
    <div className="px-5 text-sm">
      <div className="mt-5">
        <div className="inline-block font-bold leading-4 mb-5">주소</div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          {address.zipcode}
        </div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          {address.street}
        </div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          {address.city}
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">이름</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {firstName}
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {lastName}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">후리가나</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {firstFurigana}
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {lastFurigana}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">전화번호</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {country}
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            {phoneNumber}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberInfo
