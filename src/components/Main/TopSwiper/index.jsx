import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

//https://ifh.cc/g/6aO2yl.jpg

const TopSwiper = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="https://ifh.cc/g/6aO2yl.jpg" alt="슬라이드1" />
          <p>1</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ifh.cc/g/6aO2yl.jpg" alt="슬라이드1" />
          <p>2</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ifh.cc/g/6aO2yl.jpg" alt="슬라이드1" />
          <p>3</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://ifh.cc/g/6aO2yl.jpg" alt="슬라이드1" />
          <p>4</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TopSwiper
