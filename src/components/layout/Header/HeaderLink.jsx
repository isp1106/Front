import React from 'react'
import CartIcon from '../../common/CartIcon'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as Home } from '/public/assets/homeIcon.svg'

const HeaderLink = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()
  return (
    <ul className=" top-2.5 right-5 flex justify-center items-center h-9 z-50 gap-2">
      <li>
        <Link to="/search">
          <SearchIcon
            className="w-6 "
            alt="검색"
            onClick={() => navigate('/search')}
          />
        </Link>
      </li>
      <li>
        <CartIcon />
      </li>
      {currentPath.includes('/product') && (
        <li>
          <Link to="/">
            <Home />
          </Link>
        </li>
      )}
    </ul>
  )
}

export default HeaderLink
