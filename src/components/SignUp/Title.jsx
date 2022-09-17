import React from 'react'

const Title = ({ text }) => {
  return (
    <h2 className="text-[30px] font-bold mt-[35px]">
      <strong>{text}</strong>를 <br />
      생성해주세요!
    </h2>
  )
}

export default Title
