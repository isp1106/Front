import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import CartIcon from '../../common/CartIcon'
import { ReactComponent as SetIcon } from '/public/assets/setting_icon.svg'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-end items-center h-[4.125rem] leading-none px-5 justify-between">
      <BackOn className="" onClick={() => navigate(-1)} />
      <ul className="flex items-center h-[4.125rem] gap-3.5">
        <li>
          <CartIcon />
        </li>
        <li>
          <Link to="/">
            <SetIcon className="w-6 " alt="" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
