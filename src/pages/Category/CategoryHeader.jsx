import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as CartIcon } from '/public/assets/bag.svg'

const CategoryHeader = () => {
  return (
    <div>
      <div className="w-full h-16 fixed flex items-center overflow-hidden bg-white z-40 top-0">
        <div className="w-full max-w-[600px] px-5 flex justify-center">
          <div className="flex justify-between w-full p-2 mx-1.5 border-b-2 border-primary">
            <input
              type="text"
              className="placeholder:text-primary"
              placeholder="#어라운드 앤"
            />
            <SearchIcon className="w-6" />
          </div>
          <Link to="/cart" className="m-2">
            <CartIcon className="w-8" onClick={() => navigate('/cart')} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
