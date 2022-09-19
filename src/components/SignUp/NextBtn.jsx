import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../utils'
const NextBtn = ({ next, inputValue, disabled }) => {
  const navigate = useNavigate()
  const ChangeRouter = () => {
    disabled && navigate(`/signup/${next}`, { state: inputValue })
  }
  return (
    <div
      className="cursor-pointer fixed bottom-0 left-0 right-0 z-50 "
      onClick={ChangeRouter}
    >
      <div
        className={cls(
          'h-[83px] gap-4 w-full flex flex-col justify-center items-center text-white ',
          !disabled ? 'bg-sub-primary' : 'bg-primary',
        )}
      >
        <div></div>
        <p>다음</p>
        <div className="rounded pt-1 w-[129px] bg-white "></div>
      </div>
    </div>
  )
}

export default NextBtn
