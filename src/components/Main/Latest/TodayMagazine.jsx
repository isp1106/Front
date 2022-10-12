import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
const TodayMagazine = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)

  return (
    <div
      className="relative w-[9.563em]"
      //추후 id 값 넣기
      onClick={() => navigate('/magazine/${id}')}
    >
      <img src="https://ifh.cc/g/KC4trp.png" className="w-full" />
      <button className="absolute top-4 right-4" onClick={() => setLike(!like)}>
        {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
        {/* 나중에 아이콘넣기 */}
      </button>
    </div>
  )
}

export default TodayMagazine
