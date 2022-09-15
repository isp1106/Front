import React from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

function Header() {
  return (
    <header className="h-14 fixed top-0 left-0 right-0">
      <div className="flex justify-center items-center text-center pr-5 pl-5 h-full ">
        <Logo />
        <div className="flex-grow"></div>
        <HeaderLink />
      </div>
    </header>
  )
}

export default Header
