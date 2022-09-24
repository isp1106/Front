import React, { useState } from 'react'
import HeartIcon from '../../common/HeartIcon'
import {
  magazineWoman,
  magazineMan,
  lifeMagize,
  koreaMagazine,
} from '../../../dummy/main'

const SwiperMagazine = ({ category }) => {
  const [like, setLike] = useState(false)
  let list
  switch (category) {
    case '우먼':
      list = magazineWoman
      break
    case '맨':
      list = magazineMan
      break
    case '라이프':
      list = lifeMagize
      break
    case '한국트렌드':
      list = koreaMagazine
      break
    default:
      return
  }

  return (
    <div className="flex overflow-x-scroll py-[39px] relative">
      {list.map((item, index) => (
        <div key={index} className="relative ml-[40px]">
          <img src={item.url} className="] magazine-img" />
          <div className="absolute top-2 right-2">
            <HeartIcon size="23px" fill="#ffffff" off={item.liked} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SwiperMagazine
