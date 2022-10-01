import React from 'react'

const CountBtn = ({ count, changeCartItemCount }) => {
  return (
    <div className="h-[20px] self-end bg-black-200 rounded flex text-center items-center justify-center">
      <span className="w-[20px] " onChange={changeCartItemCount}>
        -
      </span>
      <span className="bg-white w-[20px] leading-[18px] text-black-600 text-xs">
        {count}
      </span>
      <span className="w-[20px]" onClick={changeCartItemCount}>
        +
      </span>
    </div>
  )
}

export default CountBtn
