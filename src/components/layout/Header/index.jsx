import React from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

function Header() {
  return (
    <header className="h-14 border-green-700 border-4 fixed top-0 left-0 right-0 ">
      <div className="flex justify-center items-center pr-8 pl-8">
        <Logo />
        <div className="flex-grow"></div>
        <HeaderLink />
      </div>
    </header>
  )
}

export default Header
