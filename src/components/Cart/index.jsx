import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import CartItem from './CartItem'
import Total from './Total'
import CartBtn from './CartBtn'
import { useGetCartItemsQuery } from '../../store/api/cartApiSlice'

const Cart = () => {
  const {
    data: cartItems,
    isLoading,
    isError,
    isSuccess,
  } = useGetCartItemsQuery()

  const [checkedItems, setCheckedItems] = useState()
  const [calculation, setCalculation] = useState({
    totalPrice: 0,
    discountPrice: 0,
    totalCount: 0,
  })

  useEffect(() => {
    setCheckedItems(cartItems)
    setCalculation({
      totalPrice: cartItems?.reduce(
        (acc, cur) => cur.price * cur.count + acc,
        0,
      ),
      discountPrice: cartItems?.reduce(
        (acc, cur) => (cur.price - cur.sale) * cur.count + acc,
        0,
      ),
      totalCount: cartItems?.reduce((acc, cur) => cur.count + acc, 0),
    })
  }, [isSuccess])

  useEffect(() => {
    setCalculation({
      totalPrice: checkedItems?.reduce(
        (acc, cur) =>
          parseInt((cur.price * (100 - cur.sale)) / 100) * cur.count + acc,
        0,
      ),
      discountPrice: checkedItems?.reduce(
        (acc, cur) => parseInt((cur.price * cur.sale) / 100) * cur.count + acc,
        0,
      ),
      totalCount: checkedItems?.reduce((acc, cur) => cur.count + acc, 0),
    })
  }, [checkedItems])

  const onCheckedHandler = (item) => {
    checkedItems.includes(item)
      ? setCheckedItems(checkedItems.filter((product) => product !== item))
      : setCheckedItems(checkedItems.concat(item))
  }

  return (
    <>
      {isLoading ? (
        <span>로딩중..</span>
      ) : isError ? (
        <span>에러발생</span>
      ) : (
        cartItems && (
          <div className="pb-[80px]">
            <Header />
            <div className="pt-[54px] ">
              <div className="flex justify-between px-5 my-[14px]">
                <div className="text-black-400 text-xs">
                  전체 {cartItems.length}개
                </div>
                <div className="text-point text-xs">선택 삭제</div>
              </div>
              {!cartItems && <div>장바구니에 상품이 없습니다.</div>}
              {cartItems.map((item) => (
                <CartItem
                  item={item}
                  key={item.id}
                  onCheckedHandler={() => onCheckedHandler(item)}
                />
              ))}
            </div>
            <Total
              totalPrice={calculation.totalPrice}
              discountPrice={calculation.discountPrice}
              totalCount={calculation.totalCount}
            />
          </div>
        )
      )}
      <CartBtn
        totalPrice={calculation.totalPrice}
        totalCount={calculation.totalCount}
      />
    </>
  )
}

export default Cart
