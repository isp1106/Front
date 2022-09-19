import React, { useState } from 'react'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
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
    <div className="flex gap-4 overflow-x-scroll py-[39px]">
      {list.map((item, index) => (
        <React.Fragment key={index}>
          <img src={item.url} width="150" />
          <button
            className="absolute top-4 right-4"
            onClick={() => setLike(!like)}
          >
            {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
            {/* 나중에 아이콘넣기 */}
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SwiperMagazine
