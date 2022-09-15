import React from 'react'

const Logo = (hideLogo) => {
  console.log('hid', hideLogo)
  return (
    <h1 className={'items-center h-9 ' + (hideLogo ? 'flex' : 'hidden')}>
      <img
        src="assets/logoSmall.svg"
        alt="로고이미지"
        className="h-8 flex items-center"
      />
    </h1>
  )
}

export default Logo
