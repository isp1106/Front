import React from 'react'
import { ReactComponent as BackOn } from '/public/assets/back-small.svg'

const Header = () => {
  return (
    <div>
      <div className='z-10 fixed w-full flex items-center overflow-hidden bg-white max-w-[37.5rem] px-[1.75rem] h-[4.125rem]'>
        <BackOn />
      </div>
    </div>
  )
}

export default Header