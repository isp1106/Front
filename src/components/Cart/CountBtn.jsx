import React from 'react'

const CountBtn = ({ id, count, changeCountHandler }) => {
  return (
    <div className="h-[20px] self-end bg-black-200 rounded flex text-center items-center justify-center">
      <span className="w-[20px] " onChange={() => changeCountHandler(id, '+')}>
        -
      </span>
      <span className="bg-white w-[20px] leading-[18px] text-black-600 text-xs">
        {count}
      </span>
      <span className="w-[20px]" onClick={() => changeCountHandler(id, '-')}>
        +
      </span>
    </div>
  )
}

export default CountBtn
