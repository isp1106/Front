import React from 'react'
import { ReactComponent as LogoImg } from '/public/assets/logoSmall.svg'
import { cls } from '../../../utils'
const Logo = (hideLogo) => {
  console.log('hid', hideLogo)
  return (
    <h1 className="flex items-center h-9 ">
      <LogoImg className={'flex h-8 items-center '} />
      {/* <img src="" alt="로고이미지" className="h-8 flex items-center" /> */}
    </h1>
  )
}

export default Logo
