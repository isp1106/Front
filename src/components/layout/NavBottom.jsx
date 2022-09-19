import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cls } from '../../utils'
import { ReactComponent as CategoryIcon } from '/public/assets/category.svg'
import { ReactComponent as CategoryIconOn } from '/public/assets/category-on.svg'
import { ReactComponent as HomeIcon } from '/public/assets/home.svg'
import { ReactComponent as HomeIconOn } from '/public/assets/home-on.svg'
import { ReactComponent as LikeIcon } from '/public/assets/like.svg'
import { ReactComponent as LikeIconOn } from '/public/assets/like-on.svg'
import { ReactComponent as MyIcon } from '/public/assets/my.svg'
import { ReactComponent as MyIconOn } from '/public/assets/my-on.svg'
import { ReactComponent as OnulIcon } from '/public/assets/onul.svg'
import { ReactComponent as OnulIconOn } from '/public/assets/onul-on.svg'

const NavBottom = () => {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 ">
      <nav className="relative z-40">
        <ul className="flex flex-wrap bg-neutral-100 justify-between pt-1 pb-2 pl-3 pr-3 items-center">
          <li>
            <Link
              to="/category"
              className={cls(
                'flex items-center flex-col ',
                currentPath === '/category' ? 'text-primary' : '',
              )}
            >
              {currentPath === '/category' ? (
                <CategoryIconOn />
              ) : (
                <CategoryIcon />
              )}
              <span className="text-xs text-black-400">CATEGORY</span>
            </Link>
          </li>
          <li>
            <Link
              to="/oneul"
              className={cls(
                'flex items-center flex-col  ',
                currentPath === '/oneul' ? 'text-primary' : '',
              )}
            >
              {currentPath === '/oneul' ? <OnulIconOn /> : <OnulIcon />}
              <span className="text-xs text-black-400">ONUL</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={cls(
                'flex items-center flex-col  ',
                currentPath === '/' ? 'text-primary' : '',
              )}
            >
              {currentPath === '/' ? <HomeIconOn /> : <HomeIcon />}
              <span className="text-xs text-black-400">HOME</span>
            </Link>
          </li>
          <li>
            <Link
              to="/like"
              className={cls(
                'flex items-center flex-col  ',
                currentPath === '/like' ? 'text-primary' : '',
              )}
            >
              {currentPath === '/like' ? <LikeIconOn /> : <LikeIcon />}

              <span className="text-xs text-black-400">LIKE</span>
            </Link>
          </li>
          <li>
            <Link
              to="/my"
              className={cls(
                'flex items-center flex-col  ',
                currentPath === '/my' ? 'text-primary' : '',
              )}
            >
              {currentPath === '/my' ? <MyIconOn /> : <MyIcon />}
              <span className="text-xs text-black-400">MY</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBottom
