import React from 'react'
import { ReactComponent as SearchIconOn } from '/public/assets/search.svg'

const Header = () => {
  return (
    <div className="flex justify-between items-center pl-5 pr-5 h-[66px]">
      <h2 className="text-xl font-bold">오늘</h2>
      <div>
        <SearchIconOn className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Header
