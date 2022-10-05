import React, { useState } from 'react'

const Modal = ({ isOpen, children }) => {
  return (
    <>
      <div
        id="backdrop"
        className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        // hidden={!isOpen}
      ></div>
      <div className="absolute top-[50%] right-[50%] translate-x-2/4 -translate-y-2/4 bg-white p-5 rounded min-w-[300px]">
        {children}
      </div>
    </>
  )
}

export default Modal
