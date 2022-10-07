import React from 'react'
import { ReactComponent as LogoImg } from '/public/assets/logoSmall.svg'
const Logo = () => {
  return (
    <div className="flex items-center h-16 z-50 absolute left-[20px]">
      <LogoImg className="flex h-8 items-center" />
    </div>
  )
}

export default Logo
