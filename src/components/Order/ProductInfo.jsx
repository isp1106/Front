import React from 'react'
import Card from './Card'
import { cartItems } from '../../dummy/cart'

const ProductInfo = () => {
  return (
    <div className="border-b border-black-200 py-5">
      <h4 className="mb-[12px] px-5 font-bold">주문상품 정보</h4>
      {cartItems.map((item, idx) => (
        <Card item={item} key={idx} />
      ))}
    </div>
  )
}

export default ProductInfo
