import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import CartIcon from '~/components/common/CartIcon'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'

const CategoryHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full flex fixed items-center overflow-hidden bg-white z-40">
      <div className="w-full h-16 max-w-[600px] px-5 flex items-center">
        <BackOn className="w-7" onClick={() => navigate(-1)} />
        <div className="w-full items-center"></div>
        <div className="flex justify-center items-center gap-2">
          <SearchIcon onClick={() => navigate('/search')} className="w-7" />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
