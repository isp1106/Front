import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as CartIcon } from '/public/assets/bag.svg'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'
import '~/animate.css'

const CategoryHeader = ({ focus, setFocus, animation, setAnimation }) => {
  const navigate = useNavigate()

  const onFocusHandler = () => {
    if (!focus) {
      navigate('/search')
    } else {
      setAnimation('closeSearchBar')
      setTimeout(() => {
        setFocus(false)
        setAnimation('')
      }, 1000)
    }
  }

  const goSearch = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim === '') return
      console.log(e.target.value)
    }
  }

  return (
    <div>
      <div className="w-full h-16 flex items-center overflow-hidden bg-white z-40 top-0">
        <div className="w-full max-w-[600px] px-5 flex items-center ">
          <BackOn className="w-7" onClick={() => navigate(-1)} />
          <div className="flex pl-3 items-center justify-end w-full h-fit">
            <div className="w-full h-fit overflow-hidden">
              {focus && (
                <input
                  type="text"
                  className={`${animation} w-full px-2 py-2 placeholder:text-black-200 focus-visible:outline-none border-b-2 border-primary`}
                  placeholder="#어라운드 앤"
                  onKeyDown={() => {
                    if (e.keyCode === 13) {
                      goSearch()
                    }
                  }}
                />
              )}
            </div>
            <SearchIcon onClick={onFocusHandler} className="w-6 mx-1" />
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
