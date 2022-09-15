import React from 'react'

const HeaderLink = () => {
  return (
    <div><Link to="/search" >
    <img src="assets/search_icon.svg" className='w-8' alt="검색" />
  </Link>
  <Link to ="/cart">
    <img src="assets/shoppingBag_icon.svg" className='w-8' alt="장바구니" />
  </Link></div>
  )
}

export default HeaderLink