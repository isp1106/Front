import React from 'react'
import CartIcon from '../../common/CartIcon'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as Home } from '/public/assets/homeIcon.svg'

const HeaderLink = ({ searchNone }) => {
  const location = useLocation()
  const currentPath = location.pathname
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center">
      {!currentPath.includes('/my') && !searchNone && (
        <SearchIcon onClick={() => navigate('/search')} className="w-7" />
      )}
      {currentPath !== '/cart' && (
        <div className="pl-2">
          <CartIcon />
        </div>
      )}
      {(currentPath.includes('/product') || currentPath.includes('/cart')) && (
        <div className="pl-2">
          <Home onClick={() => navigate('/')} />
        </div>
      )}
    </div>
  )
}

export default HeaderLink
