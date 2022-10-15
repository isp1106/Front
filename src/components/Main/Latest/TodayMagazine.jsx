import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
const TodayMagazine = () => {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)

  return (
    <div
      className="w-[9.563em]"
      //추후 id 값 넣기
      onClick={() => navigate('/magazine/${id}')}
    >
      <div className="absolute bottom-12">
        <img src="https://ifh.cc/g/KC4trp.png" className=" w-[150px]" />
        <button
          className="absolute top-4 right-4"
          onClick={() => navigate('/magazine/1')}
        >
          {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
        </button>
      </div>
    </div>
  )
}

export default TodayMagazine
