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
        {list.title}
      </div>
      <div className="relative">
        {thumbnail.map((item, idx) => (
          <React.Fragment key={idx}>
            <img src={item} className="w-full" />
            {idx === 0 && <Brand />}
          </React.Fragment>
        ))}
        {items.map((item, idx) => (
          <Plus
            className={`absolute ${item.className}`}
            id={items.id}
            key={idx}
          />
        ))}
      </div>
    </>
  )
}

export default TopMain
