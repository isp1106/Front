import React from 'react'

const Title = ({ title, text }) => {
  return (
    <h2 className="text-[30px] font-medium mt-[35px]">
      <strong className="font-bold">{title}</strong>를 <br />
      {text}해주세요!
    </h2>
  )
}

export default Title
