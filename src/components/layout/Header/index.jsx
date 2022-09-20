import React, { useState, useEffect } from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

function Header() {
  return (
    <>
      <header className="border-b-2 border-primary fixed w-full h-14 bg-white top-0 z-50 box-shadow-custom">
        <div className="relative flex justify-center items-center text-center pr-5 pl-5 h-full ">
          <div className="flex-grow"></div>
          <HeaderLink />
        </div>
      </header>
      <Logo className="absolute z-50" />
    </>
  )
}

export default Header
