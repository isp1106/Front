import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const itemList = ['우먼', '맨', '라이프', '한국트렌드']

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + itemList[index] + '</span>'
    },
  }
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* 메인페이지 리스트  */}
          예시 <br />
          예시 <br />
          예시
        </SwiperSlide>
        <SwiperSlide>
          {/* 메인페이지 리스트  */}
          예시2
        </SwiperSlide>
        <SwiperSlide>
          {/* 메인페이지 리스트  */}
          예시3
        </SwiperSlide>
        <SwiperSlide>
          {/* 메인페이지 리스트  */}
          예시4
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
