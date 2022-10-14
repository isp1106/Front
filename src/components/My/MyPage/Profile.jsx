import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as PenIcon } from '/public/assets/pen_icon.svg'
import { useSelector } from 'react-redux'
const Profile = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth).user

  return (
    <div className="flex items-center px-12">
      <span className="font-bold text-xl mr-2.5">{user}</span>
      <PenIcon className="w-4" onClick={() => navigate('edit-user-info')} />
    </div>
  )
}

export default Profile
