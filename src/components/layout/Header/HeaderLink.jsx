import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLink = () => {
  return (
    <div className="flex justify-center ">
      <Link to="/search" className="mr-6">
        <img src="assets/search_icon.svg" className="w-6 " alt="검색" />
      </Link>
      <Link to="/cart">
        <img src="assets/shoppingBag_icon.svg" className="w-6" alt="장바구니" />
      </Link>
    </div>
  )
}

export default HeaderLink
