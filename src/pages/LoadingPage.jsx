import React from 'react'
import { ReactComponent as LoadingLogo } from '/public/assets/loadingLogo.svg'
const LoadingPage = () => {
  return (
    <div className="w-screen h-screen relative  flex justify-center items-center bg-primary z-[100]">
      <LoadingLogo className="w-36" />
    </div>
  )
}

export default LoadingPage
