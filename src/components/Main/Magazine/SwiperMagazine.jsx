import { useState } from 'react'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
import { magazineWoman as list } from '../../../dummy/magazine'

const SwiperMagazine = () => {
  const [like, setLike] = useState(false)

  return (
    <div className="flex gap-4 overflow-x-scroll py-[39px]">
      {list.map((item, index) => (
        <>
          <img src={item.url} width="150" />
          <button
            className="absolute top-4 right-4"
            onClick={() => setLike(!like)}
          >
            {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
            {/* 나중에 아이콘넣기 */}
          </button>
        </>
      ))}
    </div>
  )
}

export default SwiperMagazine
