import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div  className='border-green-700 border-4 flex item-center'>
        <div>
          <img src="assets/logoSmall.svg" alt="로고이미지" className='flex justify-start align-middle h-[15rem]'/>
        </div>
        <div>
          <div>
            <img src="assets/search_icon.svg" className='w-[30rem]' alt="검색" />
          </div>
          <div>
            <img src="assets/shoppingBag_icon.svg" className='w-[30rem]' alt="장바구니" />
          </div>
        </div>
        {/* <Link to="/cart" >
          <img src="assets/shoppingBag_icon"alt="장바구니" />
        </Link> */}
      </div>
   

    </header>
  )
}

export default Header