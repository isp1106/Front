import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from '/public/assets/bag.svg'

const CartICon = () => {
  return (
    <Link to="/cart" className="relative">
      <CartIcon className="w-8" alt="장바구니" />
      <span className="count absolute right-0 bottom-[-0.188rem] text-[0.625rem] rounded-[50%] bg-primary text-white w-[0.875rem] h-[0.875rem] text-center leading-[0.875rem]">
        2
      </span>
    </Link>
  )
}

export default CartICon
