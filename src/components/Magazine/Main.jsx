import React from 'react'
import { useNavigate } from 'react-router-dom'
import { magazineDummy as list } from '../../dummy/magaineDetail'
import Brand from './Brand'
import Plus from './Plus'

const TopMain = () => {
  const { title, thumbnail, items } = list
  const navigate = useNavigate()
  const onClickHandler = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <>
      <div className="h-[76px] bg-point text-white font-bold flex items-center justify-center">
        {title}
      </div>
      {thumbnail.map((item, idx) => (
        <div className="relative" key={idx}>
          <img src={item} className="w-full " />
          {items.map((target, idx) => (
            <Plus
              className={`absolute ${target.className}`}
              id={target.id}
              key={idx}
            />
          ))}
        </div>
      ))}
    </>
  )
}

export default TopMain
