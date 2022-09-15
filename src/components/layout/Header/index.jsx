import React, { useState, useEffect } from 'react'
import HeaderLink from './HeaderLink'
import Logo from './Logo'

function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [hideLogo, setHideLogo] = useState(false)
  function handleScroll() {
    if (scrollY > 300) {
      setScrollY(window.scrollY)
      setHideLogo(true)
      console.log(hideLogo)
    } else {
      console.log(scrollY)
      setScrollY(window.scrollY)
      setHideLogo(false)
    }
  }

  useEffect(() => {
    function scrollLinstener() {
      window.addEventListener('scroll', handleScroll)
    }
    scrollLinstener()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <header className="h-14 fixed top-0 left-0 right-0">
      <div className="flex justify-center items-center text-center pr-5 pl-5 h-full ">
        <Logo hideLogo={hideLogo} />
        <div className="flex-grow"></div>
        <HeaderLink />
      </div>
    </header>
  )
}

export default Header
