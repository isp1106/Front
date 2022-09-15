import React from 'react'
import { ReactComponent as CategoryIcon } from '/public/assets/category.svg'
import { ReactComponent as HomeIcon } from '/public/assets/home.svg'
import { ReactComponent as LikeIcon } from '/public/assets/like.svg'
import { ReactComponent as MyIcon } from '/public/assets/my.svg'
import { ReactComponent as OnulIcon } from '/public/assets/onul.svg'

const NavBottom = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <nav className="relative z-40">
        <ul className="flex flex-wrap bg-neutral-100 justify-between p-4 items-center">
          <li className="flex items-center flex-col gap-1">
            <CategoryIcon />
            <span className="text-sm">CATEGORY</span>
          </li>
          <li className="flex items-center flex-col gap-1">
            <OnulIcon />
            <span className="text-sm">ONUL</span>
          </li>
          <li className="flex items-center flex-col gap-1">
            <HomeIcon />
            <span className="text-sm">HOME</span>
          </li>
          <li className="flex items-center flex-col gap-1">
            <LikeIcon />
            <span className="text-sm">LIKE</span>
          </li>
          <li className="flex items-center flex-col gap-1">
            <MyIcon />
            <span className="text-sm">MY</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBottom
