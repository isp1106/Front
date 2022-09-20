import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as CartIcon } from '/public/assets/bag.svg'

const HeaderLink = () => {
  return (
    <ul className=" top-2.5 right-5 flex justify-center items-center h-9 z-50 ">
      <li className="mr-3.5 ">
        <Link to="/search">
          <SearchIcon className="w-6 " alt="검색" />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </li>
    </ul>
  )
}

export default HeaderLink
