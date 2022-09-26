import React from 'react'
import { magazine as list } from '../../dummy/magaineDetail'
import Brand from './Brand'
import Plus from './Plus'

const TopMain = () => {
  return (
    <>
      <div>{list.title}</div>
      <div
        className="w-full h-[465px] bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${list.img1})`,
        }}
      ></div>
      <div
        className="relative w-full h-[762px] bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${list.img2})`,
        }}
      >
        <Plus
          className="absolute bottom-[260px] left-[100px]"
          //추후 상품 id 넣기
        />
        <Plus
          className="absolute bottom-[360px] right-[40px]"
          //추후 상품 id 넣기
        />
      </div>
      <div
        className="w-full h-[579px] bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${list.img3})`,
        }}
      ></div>
      <Brand />
      <div
        className="relative w-full h-[777px] bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${list.img4})`,
        }}
      >
        <Plus
          className="absolute bottom-[230px] left-[120px]"
          //추후 상품 id 넣기
        />
      </div>
      <div
        className="relative w-full h-[373px] bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${list.img5})`,
        }}
      >
        <Plus
          className="absolute bottom-[150px] right-[70px]"
          //추후 상품 id 넣기
        />
      </div>
    </>
  )
}

export default TopMain
