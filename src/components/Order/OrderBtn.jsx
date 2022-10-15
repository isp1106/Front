import React from 'react'
import { cls } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { useAddOrdersMutation } from '../../store/api/orderApiSlice'

const OrderBtn = ({ items }) => {
  const navigate = useNavigate()
  const [addOrders] = useAddOrdersMutation()
  const paynowHandler = (id) => {
    addOrders(id)
    navigate('/order/completed', { state: items })
  }
  const [item] = items
  return (
    <div className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 ">
      <div
        className={cls(
          'h-[80px] gap-4 w-full flex justify-center items-center text-white-200 bg-point pb-6 text-lg',
        )}
        onClick={() => paynowHandler(item.productId)}
      >
        <span className="px-1">
          총 {items?.reduce((acc, cur) => cur.count + acc, 0).toLocaleString()}
          개
        </span>
        <div className="w-[1px] h-[18px] bg-white"></div>
        <span className="px-1">
          {items
            ?.reduce((acc, cur) => cur.price * cur.count + acc, 0)
            .toLocaleString()}{' '}
          ¥ 결제하기
        </span>
      </div>
    </div>
  )
}

export default OrderBtn
