import React from 'react'
import { ReactComponent as LikeIcon } from '/public/assets/heart.svg'
import { ReactComponent as LikeIconOn } from '/public/assets/heart-on.svg'

const TodayRecommended = () => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-5 pl-5">
        <strong className="text-primary">오늘</strong>의 추천브랜드
      </h3>
      <div className="grid grid-cols-2 grid-rows-3 border-t-2 border-b-2 border-primary">
        <div
          className="col-span-2 border-b-2 border-primary h-[226px] bg-cover"
          style={{
            backgroundImage: `url("https://img.29cm.co.kr/next-product/2020/10/08/58b43e8961ef404cb86307ff7d3681ac_20201008122852.jpg?width=700")`,
          }}
        ></div>
        <div className="row-span-2 border-b-2 border-primary border-r-2 text-color-800 text-xl">
          <p className="text-[12px] p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </p>
        </div>
        <div
          className="border-b-2 border-primary bg-cover"
          style={{
            backgroundImage: `url('https://img.29cm.co.kr/next-product/2020/05/12/c531a0cf89354410976b4248c6a83fc2_20200512121312.jpg?width=700')`,
          }}
        ></div>
        <div
          className="border-b-2 border-primary bg-cover"
          style={{
            backgroundImage: `url('https://img.29cm.co.kr/next-product/2019/11/07/f8dbe259a4f04e1ca709a75e32d6aa52_20191107153205.jpg?width=300')`,
          }}
        ></div>
        <div className="col-span-2 pl-5 pr-5 pt-2 pb-2 flex justify-between items-center">
          <span className="text-sm text-primary font-bold">원브릴리언트</span>
          <LikeIcon style={{ width: '20px' }} />
          {/* 나중에 if 처리하기 <LikeIconOn /> */}
        </div>
      </div>
    </div>
  )
}

export default TodayRecommended
