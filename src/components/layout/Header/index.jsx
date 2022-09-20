import React, { useState, useEffect } from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'
import { ReactComponent as BackIcon } from '/public/assets/back-on.svg'
import { useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <>
      <header className="border-b-2 border-primary fixed w-full h-14 bg-white top-0 z-50 box-shadow-custom">
        <div className="relative flex justify-center items-center text-center pr-5 pl-3 h-full ">
          {currentPath === '/' ? (
            <Logo className="absolute z-50" />
          ) : (
            <BackIcon />
          )}
          <div className="flex-grow"></div>
          <HeaderLink />
        </div>
      </header>
    </>
  )
}

export default Header
