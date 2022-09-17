import React from 'react'
import { useNavigate } from 'react-router-dom'
const GoBack = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-3 pb-3 pl-3" onClick={() => navigate(-1)}>
      <GoBackIcon />
    </div>
  )
}

export default GoBack
