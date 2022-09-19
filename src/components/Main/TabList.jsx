import React from 'react'
import { Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const TabList = ({ tablist, changeCateogry }) => {
  return (
    <Swiper
      // install Swiper modules
      className="tablist pl-5 mt-4 mb-7"
      modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={3.7}
      scrollbar={{ draggable: true }}
      onSlideChange={(e) => changeCateogry(e)}
    >
      {tablist.map((item, idx) => (
        <SwiperSlide
          className={
            item !== '' &&
            'tab leading-normal border border-primary rounded-2xl text-center text-xs text-primary whitespace-nowrap'
          }
          key={idx}
        >
          <span> {item}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TabList
