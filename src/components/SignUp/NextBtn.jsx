import React from 'react'
import { useNavigate } from 'react-router-dom'
const NextBtn = ({ next }) => {
  const navigate = useNavigate()
  return (
    <div
      className="cursor-pointer fixed bottom-0 left-0 right-0 z-50 "
      onClick={() => navigate(`/signup/${next}`)}
    >
      <div className="h-[83px] gap-4 w-full flex flex-col justify-center items-center text-white bg-primary ">
        <div></div>
        <p>다음</p>
        <div className="rounded pt-1 w-[129px] bg-white "></div>
      </div>
    </div>
  )
}

export default NextBtn
