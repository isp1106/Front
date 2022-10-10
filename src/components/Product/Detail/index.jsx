import React from 'react'
import MainSlide from './MainSlide'
import Explanation from './Explanation'
import DetailDesc from './DetailDesc'
import Relation from './Magazine'
import SubContent from './SubContent'
import DetailBtn from './DetailBtn'
import Brand from './Brand'
const Detail = () => {
  return (
    <>
      <MainSlide />
      <Explanation />
      <Brand />
      <DetailDesc />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Relation />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <SubContent />
      <DetailBtn />
    </>
  )
}

export default Detail
