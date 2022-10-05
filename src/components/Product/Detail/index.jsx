import React, { useState } from 'react'
import MainSlide from './MainSlide'
import Explanation from './Explanation'
import Brand from './Brand'
import DetailDesc from './DetailDesc'
import Relation from './Magazine'
import SubContent from './SubContent'
import CartModal from './CartModal'
import DetailBtn from './DetailBtn'

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ModalOpenHandler = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <MainSlide />
        <Explanation />
        <Brand />
        <DetailDesc />
      </div>
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Relation />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <SubContent />
      {isOpen ? (
        <CartModal onClick={ModalOpenHandler} isOpen={isOpen} />
      ) : (
        <DetailBtn onClick={ModalOpenHandler} isOpen={isOpen} />
      )}
    </>
  )
}

export default Detail
