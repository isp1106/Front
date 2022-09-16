import React from 'react'
import { ReactComponent as LogoImg } from '/public/assets/logoSmall.svg'
const Logo = () => {
  return (
    <h1 className="flex items-center h-9 ">
      <LogoImg className="flex h-8 items-center" />
    </h1>
  )
}

export default Logo
