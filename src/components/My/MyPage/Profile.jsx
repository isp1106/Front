import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as PenIcon } from '/public/assets/pen_icon.svg'
const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center px-12">
      <span className="font-bold text-xl mr-2.5">유키</span>
      <PenIcon className="w-4" onClick={() => navigate('edit-user-info')} />
    </div>
  )
}

export default Profile
