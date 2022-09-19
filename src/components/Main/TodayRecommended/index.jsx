import React from 'react'
import { ReactComponent as LikeIcon } from '/public/assets/heart.svg'
import { ReactComponent as LikeIconOn } from '/public/assets/heart-on.svg'
import {
  womanRecommended,
  manRecommended,
  lifeRecommended,
  koreaRecommended,
} from '../../../dummy/main'

const TodayRecommended = ({ category }) => {
  let list
  switch (category) {
    case '우먼':
      list = womanRecommended
      break
    case '맨':
      list = manRecommended
      break
    case '라이프':
      list = lifeRecommended
      break
    case '한국트렌드':
      list = koreaRecommended
      break
    default:
      return
  }

  console.log('here', list.img1)
  return (
    <div>
      <h3 className="font-bold text-xl mb-5 pl-5">
        <strong className="text-primary">오늘</strong>의 추천브랜드
      </h3>
      <div className="grid grid-cols-2 grid-rows-3 border-t-2 border-b-2 border-primary">
        <div
          className="col-span-2 border-b-2 border-primary h-[226px] bg-cover"
          style={{
            backgroundImage: `url(${list.img1})`,
          }}
        ></div>
        <div className="row-span-2 border-b-2 border-primary border-r-2 text-color-800 text-xl">
          <p className="text-[12px] p-4">{list.desc}</p>
        </div>
        <div
          className="border-b-2 border-primary bg-cover"
          style={{
            backgroundImage: `url(${list.img2})`,
          }}
        ></div>
        <div
          className="border-b-2 border-primary bg-cover"
          style={{
            backgroundImage: `url(${list.img3})`,
          }}
        ></div>
        <div className="col-span-2 pl-5 pr-5 pt-2 pb-2 flex justify-between items-center">
          <span className="text-sm text-primary font-bold">{list.brand}</span>
          {list.liked ? (
            <LikeIconOn style={{ width: '20px' }} />
          ) : (
            <LikeIcon style={{ width: '20px' }} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TodayRecommended
