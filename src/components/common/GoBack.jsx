import React from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back.svg'

import { useNavigate } from 'react-router-dom'
const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div
      className="pt-12 pb-3 pl-3 fixed overflow-hidden bg-white w-full"
      onClick={() => navigate(-1)}
    >
      <GoBackIcon />
    </div>
  )
}

export default GoBack
