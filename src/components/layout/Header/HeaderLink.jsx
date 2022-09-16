import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as CartIcon } from '/public/assets/shoppingBag_icon.svg'

const HeaderLink = () => {
  return (
    <ul className="fixed top-2.5 right-5 flex justify-center items-center h-9">
      <li className="mr-3.5">
        <Link to="/search">
          <SearchIcon className="w-6 " alt="검색" />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <CartIcon className="w-6" alt="장바구니" />
        </Link>
      </li>
    </ul>
  )
}

export default HeaderLink
