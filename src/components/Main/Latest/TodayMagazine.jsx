import { useState } from 'react'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
const TodayMagazine = () => {
const [like, setLike] = useState(false)

  return (
    <div className='relative w-[9.563em]'>
      <img src="https://ifh.cc/g/DKN0O0.png" className='w-full' />
      <button
        className='absolute top-4 right-4'
        onClick={() => setLike(!like)}
      >
        {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
        {/* 나중에 아이콘넣기 */}
      </button>
    </div>
  )
}

export default TodayMagazine