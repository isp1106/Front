import React from 'react'

const Slide = ({ item }) => {
  const { src, description, title } = item
  return (
    <div className="w-full relative">
      <img className="w-full" src={src} alt="슬라이드" />
      <div className="absolute bottom-10 mx-5">
        {/* <h3 className="text-3xl font-medium text-white drop-shadow-md mb-3 ">
          {title[0]}
          <br />
          {title[1]}
        </h3> */}
        <h3 className="whitespace-pre-wrap text-3xl font-medium text-white drop-shadow-md mb-3 ">
          {title}
        </h3>
        <p className="text-sm font-medium text-white drop-shadow-md">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Slide
