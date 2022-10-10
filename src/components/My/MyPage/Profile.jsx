import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as CameraIcon } from '/public/assets/camera_icon.svg'
import { ReactComponent as PenIcon } from '/public/assets/pen_icon.svg'
const Profile = () => {
  const uploadedImage = useRef(null)
  const imageUploader = useRef(null)
  const navigate = useNavigate()
  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center px-5">
      <div className="w-[3.438rem] h-[3.438rem] relative mr-4">
        <div
          className="overflow-hidden rounded-[50%] w-[3.438rem] h-[3.438rem] bg-[url('../../public/assets/profile_icon_default.svg')] bg-center bg-no-repeat bg-cover"
          onClick={() => imageUploader.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: 'none',
            }}
          />
          <img className="w-full h-full" ref={uploadedImage} />
        </div>
        <CameraIcon className="absolute top-[70%] left-[65%] w-6" />
      </div>
      <span className="font-bold text-xl mr-[0.625rem]">유키</span>
      <PenIcon
        className="w-[0.844rem]"
        onClick={() => navigate('edit-user-info')}
      />
    </div>
  )
}

export default Profile
