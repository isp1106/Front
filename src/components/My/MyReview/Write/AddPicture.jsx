import React, { useRef } from 'react'

const AddPicture = ({handleImageUpload, uploadedImage, imageUploader}) => {
  return (
    <div className="mb-4">
      <h3 className="font-bold pb-5">사진</h3>

      <div className="relative w-[86px] h-[86px] overflow-hidden rounded" onClick={() => imageUploader.current.click()}>
        <label
          htmlFor="formFile"
          className="h-full bg-black-200 flex items-center justify-center"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9998 16.7507C17.919 16.7507 18.6665 17.4982 18.6665 18.4173C18.6665 19.3365 17.919 20.084 16.9998 20.084C16.0807 20.084 15.3332 19.3365 15.3332 18.4173C15.3332 17.4982 16.0807 16.7507 16.9998 16.7507ZM16.9998 15.584C15.4348 15.584 14.1665 16.8523 14.1665 18.4173C14.1665 19.9823 15.4348 21.2507 16.9998 21.2507C18.5648 21.2507 19.8332 19.9823 19.8332 18.4173C19.8332 16.8523 18.5648 15.584 16.9998 15.584Z"
              fill="white"
            />
            <path
              d="M22.4378 11.7015L19.8512 8.51325H17.0793V8.5H14.2672L11.5448 11.7004H7.0835V25.5H26.9168V11.7004H22.4378V11.7015ZM25.264 23.9556H8.73627V13.2471H12.3488L13.6722 11.7015L15.0888 10.0467H17.0391V10.0599H19.0284L20.3612 11.7026L21.6161 13.2482H25.264V23.9567V23.9556Z"
              fill="white"
            />
          </svg>
        </label>
        <input
          id="formFile"
          style={{
            display: 'none',
          }}
          type="file"
          onChange={handleImageUpload}
          ref={imageUploader}
          accept="image/*"
          multiple="multiple"
        />
        <img className="w-full h-full absolute left-0 top-0" ref={uploadedImage} />
      </div>
    </div>
  )
}

export default AddPicture
