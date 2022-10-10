import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import CartIcon from '~/components/common/CartIcon'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'
import '~/animate.css'

const SearchHeader = ({ focus, setFocus, animation, setAnimation }) => {
  const navigate = useNavigate()
  const onFocusHandler = () => {
    if (!focus) {
      setFocus(true)
      setAnimation('openSearchBar')
      setTimeout(() => {
        setAnimation('')
      }, 1000)
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
      <div className="w-full flex items-center overflow-hidden bg-white z-40">
        <div className="w-full h-16 max-w-[600px] px-5 flex items-center">
          <BackOn className="w-7" onClick={() => navigate(-1)} />
          <div className="w-full h-fit overflow-hidden flex ml-3 items-center">
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
          <div className="flex justify-center items-center gap-2">
            <SearchIcon onClick={onFocusHandler} className="w-7" />
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchHeader
