import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperCore, { Autoplay } from 'swiper'
import { useState } from 'react'
import { ReactComponent as LikeWhiteIcon } from '/public/assets/like-white.svg'
const SwiperMagazine = () => {
  const [like, setLike] = useState(false)
  SwiperCore.use([Autoplay])
  const StyleSwiperWrapper = {
    width: 'calc(100% - 3.75rem)',
    margin: '2.5rem 0 1.875rem 2.5rem',
  }

  return (
    <Swiper
      style={StyleSwiperWrapper}
      spaceBetween={30}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides={false}
      autoplay
      loopedSlides={1}
    >
      <SwiperSlide>
        <img src="https://ifh.cc/g/DKN0O0.png" className="w-full" />
        <button
          className="absolute top-4 right-4"
          onClick={() => setLike(!like)}
        >
          {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
          {/* 나중에 아이콘넣기 */}
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://ifh.cc/g/DKN0O0.png" className="w-full" />
        <button
          className="absolute top-4 right-4"
          onClick={() => setLike(!like)}
        >
          {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
          {/* 나중에 아이콘넣기 */}
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://ifh.cc/g/DKN0O0.png" className="w-full" />
        <button
          className="absolute top-4 right-4"
          onClick={() => setLike(!like)}
        >
          {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
          {/* 나중에 아이콘넣기 */}
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://ifh.cc/g/DKN0O0.png" className="w-full" />
        <button
          className="absolute top-4 right-4"
          onClick={() => setLike(!like)}
        >
          {like ? <LikeWhiteIcon /> : <LikeWhiteIcon />}
          {/* 나중에 아이콘넣기 */}
        </button>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperMagazine
