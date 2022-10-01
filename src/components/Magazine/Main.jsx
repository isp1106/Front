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
      <div className="relative">
        <img src={thumbnail[0]} className="w-full " />
        <Plus className={`absolute ${items[0].className}`} id={items[0].id} />
        <Plus className={`absolute ${items[1].className}`} id={items[1].id} />
      </div>
      <Brand />
      <div className="relative">
        <img src={thumbnail[1]} className="relative w-full " />
        <Plus className={`absolute ${items[2].className}`} id={items[2].id} />
        <Plus className={`absolute ${items[3].className}`} id={items[3].id} />
      </div>
    </>
  )
}

export default TopMain
