import React, { useState } from 'react'

const PerioContentBox = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const onChangeHanler = (e) => {
    const { value } = e.target
    console.log(value)
    //바뀔때마다 api호출
  }

  return (
    <div className="px-5 mt-5">
      <select
        id="countries"
        className="bg-gray-50 border border-black-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-no-repeat"
        style={{
          backgroundImage: `url('/public/assets/back.svg')`,
          backgroundPosition: 'right .5rem top .6rem',
        }}
        onChange={onChangeHanler}
      >
        <option defaultValue="all">기간 선택</option>
        <option value="all">전체보기</option>
        <option value={month}>
          {year} 년 {month}월
        </option>
        <option value={month - 1}>
          {year} 년 {month - 1}월
        </option>
        <option value={month - 2}>
          {year} 년 {month - 2}월
        </option>
        <option value={month - 3}>
          {year} 년 {month - 3}월
        </option>
      </select>
    </div>
  )
}

export default PerioContentBox
