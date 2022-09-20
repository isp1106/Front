import React, { useState } from 'react'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/heart-white.svg'
import { ReactComponent as LikeWhiteIconOn } from '/public/assets/heart-white-on.svg'
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
    <div className="flex gap-4 overflow-x-scroll py-[39px] relative">
      {list.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.url} className="magazine-img" />
          {item.liked ? (
            <LikeWhiteIconOn
              className="absolute top-2 right-2"
              width="23px"
              height="23px"
            />
          ) : (
            <LikeWhiteIcon
              className="absolute top-2 right-2"
              width="23px"
              height="23px"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default SwiperMagazine
