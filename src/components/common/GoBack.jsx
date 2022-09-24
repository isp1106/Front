import React from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back.svg'

import { useNavigate } from 'react-router-dom'
const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div
      className="h-[66px]  pl-3 fixed overflow-hidden bg-white w-full flex items-center"
      onClick={() => navigate(-1)}
    >
      <GoBackIcon />
    </div>
  )
}

export default GoBack
