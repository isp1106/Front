import React from 'react'
import BackIcon from './BackIcon'

import { useNavigate } from 'react-router-dom'
const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div
      className="h-[66px]  pl-3 fixed overflow-hidden bg-white w-full flex items-center"
      onClick={() => navigate(-1)}
    >
      <BackIcon size="24" />
    </div>
  )
}

export default GoBack
