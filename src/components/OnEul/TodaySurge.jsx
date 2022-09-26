import React from 'react'
import './index.css'
import {
  oneulBestList,
  oneulLastestList,
  oneulFollowingList,
} from '../../dummy/main'
import HeartIcon from '../common/HeartIcon'

const TodaySurge = ({ category }) => {
  let list
  let title
  switch (category) {
    case '인기':
      list = oneulBestList
      title = '급상승'
      break
    case '최신':
      list = oneulLastestList
      title = '최신'
      break
    case '팔로잉':
      list = oneulFollowingList
      title = '팔로잉'
      break
    default:
      return
  }
  return (
    <div className="mt-10">
      <h4 className="pl-5 font-bold mb-5 text-xl">오늘의 {title}</h4>
      <div className="product__list">
        {list.map((item, index) => (
          <div key={index} className="item__list">
            <div
              className="relative item w-[50vw] h-[50vw] max-w-[300px] max-h-[300px] bg-cover"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
              }}
            >
              <div className="absolute text-white flex flex-col right-[12px] top-[16px] items-center">
                <HeartIcon fill="#ffffff" size="22" />
                <span className="text-sm">{item.liked}</span>
              </div>
            </div>
            <div className="flex py-4 pl-5">
              <div
                className="w-[39px] h-[39px] bg-cover rounded-lg mr-[14px]"
                style={{
                  backgroundImage: `url(${item.brnadurl})`,
                }}
              ></div>
              <div className="flex flex-col text-sm font-medium">
                <div className="text-black-800">{item.brnad}</div>
                <div className="flex">
                  <span className=" text-primary">
                    {item.discount && item.discount}%
                  </span>
                  <span className="ml-[4px]">{item.price}¥</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodaySurge
