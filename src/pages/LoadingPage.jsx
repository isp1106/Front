import React from 'react'
import { ReactComponent as LoadingLogo } from '/public/assets/loadingLogo.svg'
const LoadingPage = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-primary">
      <LoadingLogo className="w-36" />
    </div>
  )
}

export default LoadingPage
