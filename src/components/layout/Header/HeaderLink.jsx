import React from 'react'
import CartIcon from '../../common/CartIcon'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import SearchIcon from '../../common/SearchIcon'
import { ReactComponent as Home } from '/public/assets/homeIcon.svg'

const HeaderLink = () => {
  const location = useLocation()
  const currentPath = location.pathname
  console.log(currentPath)
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center gap-3">
      {!currentPath.includes('/my') && (
        <SearchIcon size="30" onClick={() => navigate('/search')} />
      )}
      {currentPath !== '/cart' && currentPath !== '/oneul' && <CartIcon />}
      {(currentPath.includes('/product') || currentPath.includes('/cart')) && (
        <div className="pl-2">
          <Home onClick={() => navigate('/')} />
        </div>
      )}
    </div>
  )
}

export default HeaderLink
