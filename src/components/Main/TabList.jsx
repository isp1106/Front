import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const TabList = ({ tablist, setCategory }) => {
  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
        className="tablist pl-5 mt-4 pb-20 overflow-y-visible"
        spaceBetween={60}
        loop={true}
        slidesPerView={'auto'}
        slideToClickedSlide={true}
      >
        {tablist.map((item, idx) => (
          <SwiperSlide
            className={
              'tab leading-normal border border-primary rounded-2xl text-center text-xs text-primary whitespace-nowrap'
            }
            key={idx}
          >
            {({ isActive }) => (
              <div
                onClick={() => {
                  if (isActive) {
                    setCategory(item)
                  }
                }}
              >
                <span>{item}</span>
                <div
                  className={
                    isActive &&
                    'relative after:w-0.5 after:h-20 after:bg-primary after:absolute after:top-[100%] after:left-[calc(50%-2px)]'
                  }
                ></div>
                <div
                  className={
                    isActive &&
                    'relative after:absolute after:w-2.5 after:h-2.5 after:bg-primary after:rounded-full after:top-[70px] after:left-[calc(50%-6px)]'
                  }
                ></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-2.5 bg-white-200 absolute bottom-0"></div>
    </div>
  )
}

export default TabList
