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

  useEffect(() => {
    setCheckedItems(cartItems)
  }, [isSuccess])

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
            <Header>장바구니</Header>
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
            <Total items={checkedItems} />
          </div>
        )
      )}
      <CartBtn items={checkedItems} />
    </>
  )
}

export default Cart
