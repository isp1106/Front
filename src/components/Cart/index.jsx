import React, { useState } from 'react'
import Header from '../layout/Header'
import Card from './Card'
import Total from './Total'
import CartBtn from './CartBtn'
import { cartItems as cart } from '../../dummy/cart'

const Cart = () => {
  const [cartItems, setCartItems] = useState(cart)
  const totalPrice = cartItems.reduce(
    (acc, cur) => cur.price * cur.count + acc,
    0,
  )
  //parseInt((price * (100 - sale)) / 100)
  const discountPrice = cartItems.reduce(
    (acc, cur) => (cur.price - cur.sale) * cur.count + acc,
    0,
  )
  const totalCount = cartItems.reduce((acc, cur) => cur.count + acc, 0)
  return (
    <>
      <div className="pb-[10px]">
        <Header />
        <div className="pt-[54px] ">
          <div className="flex justify-between px-5 my-[14px]">
            <div className="text-black-400 text-xs">
              전체 {cartItems.length}개
            </div>
            <div className="text-point text-xs">선택 삭제</div>
          </div>
          {!cartItems && <div>장바구니에 상품이 없습니다.</div>}
          {cartItems.map((item, idx) => (
            <Card item={item} key={idx} setCartItems={setCartItems} />
          ))}
        </div>
        <Total totalPrice={totalPrice} discountPrice={discountPrice} />
      </div>
      <CartBtn totalPrice={totalPrice} totalCount={totalCount} />
    </>
  )
}

export default Cart
