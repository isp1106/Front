import React from 'react'
// import { ReactComponent as HeartIconOn } from '/public/assets/heart-white.svg'
// import { ReactComponent as HeartIcon } from '/public/assets/heart-on.svg'
import HeartIcon from '../common/HeartIcon'
import {
  TodayLanklist,
  bestLanklist,
  followingLanklist,
} from '../../dummy/main'
//더미 데이터

const TodayLank = ({ category }) => {
  let list
  switch (category) {
    case '인기':
      list = TodayLanklist
      break
    case '최신':
      list = bestLanklist
      break
    case '팔로잉':
      list = followingLanklist
      break
    default:
      return
  }

  return (
    <div className="mt-10 pl-5">
      <h4 className="font-bold mb-5 text-xl">오늘의 랭크</h4>
      <div className="flex gap-[19px] overflow-x-scroll">
        {list.map((item, index) => (
          <div key={index}>
            <div
              className="new-style w-[225px] h-[260px] bg-cover relative"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            ></div>
            <div className="mt-4 w-[225px] flex justify-between items-center text-black-800">
              <span>@ {item.userId}</span>
              <div className="flex py-1 gap-1">
                <HeartIcon fill="#252525" width="22" height="22" />
                <span className="text-[14px] ml-[8px]">{item.liked}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodayLank
