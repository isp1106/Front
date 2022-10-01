import React, { useState } from 'react'
import Header from '../layout/Header'
import CartList from './CartList'
import Total from './Total'
import CartBtn from './CartBtn'
import {
  useGetCartItemsQuery,
  useDeleteCartItemMutation,
  useChangeCountMutation,
} from '../../store/slices/cartSlice'

const Cart = () => {
  const { data: cartItems, isLoading, isError } = useGetCartItemsQuery()
  const [changeCount] = useChangeCountMutation()

  const totalPrice = cartItems?.reduce(
    (acc, cur) => cur.price * cur.count + acc,
    0,
  )
  const discountPrice = cartItems?.reduce(
    (acc, cur) => (cur.price - cur.sale) * cur.count + acc,
    0,
  )
  const totalCount = cartItems?.reduce((acc, cur) => cur.count + acc, 0)

  const changeCountHandler = (id, flag) => {
    changeCount({
      //api명세서 확인 한 후 +/- 구분 정리하기
    })
  }

  return (
    <>
      {isLoading ? (
        <span>로딩중..</span>
      ) : isError ? (
        <span>에러발생</span>
      ) : (
        cartItems && (
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
                <CartList
                  cartItems={cartItems}
                  changeCountHandler={changeCountHandler}
                />
              </div>
              <Total totalPrice={totalPrice} discountPrice={discountPrice} />
            </div>
            <CartBtn totalPrice={totalPrice} totalCount={totalCount} />
          </>
        )
      )}
    </>
  )
}

export default Cart
