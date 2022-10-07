import React from 'react'
import { cls } from '../../utils'

const OrderBtn = ({ items, paynowHandler }) => {
  return (
    <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 ">
      <div
        className={cls(
          'h-[78px] gap-4 w-full flex  justify-center items-center text-white-200 bg-primary pb-4 text-[20px]',
        )}
        onClick={paynowHandler}
      >
        <span className="px-1">
          총 {items?.reduce((acc, cur) => cur.count + acc, 0)}개
        </span>
        <div className="w-[1px] h-[18px] bg-white"></div>
        <span className="px-1">
          {items?.reduce((acc, cur) => cur.price * cur.count + acc, 0)} ¥
          결제하기
        </span>
      </div>
    </div>
  )
}

export default OrderBtn
