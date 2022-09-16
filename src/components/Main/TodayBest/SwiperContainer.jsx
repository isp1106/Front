import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Card from './Card'
import 'swiper/css'
import '~/todayBest_swiper.css'

const SwiperContainer = () => {
  const bestList = [
    {
      src: 'https://image.msscdn.net/images/goods_img/20200810/1543796/1543796_3_500.jpg?t=20200901141136',
      title: 'TGT HAIRPIN_MIX',
      sale: 10,
      price: 1100,
    },
    {
      src: 'https://aroundann.co.kr/web/product/big/202204/3f23c91dd6c296170e071a503abfe4f3.jpg',
      title: 'Bowling bag_lemon',
      sale: 12,
      price: 5700,
    },
    {
      src: 'https://image.msscdn.net/images/goods_img/20220802/2693740/2693740_10_500.jpg',
      title: 'TGT x RC Crop Blazer',
      sale: 15,
      price: 14600,
    },
    {
      src: 'https://aroundann.co.kr/web/product/big/202207/0862443e4cdb6dfa7d2d2ea0eeaf010c.png',
      title: 'Candy bag_mint',
      sale: 12,
      price: 6400,
    },
    {
      src: 'https://m.aroundann.co.kr/web/product/big/202208/3c670efcb23df9d96651a9feb403a47b.jpg',
      title: 'Sally bag_ivory',
      sale: 20,
      price: 3900,
    },
    {
      src: 'https://m.aroundann.co.kr/web/product/big/202209/1d6345b371a78e311a9bea62a18242c2.jpg',
      title: 'troi bag_black',
      sale: 10,
      price: 4900,
    },
    {
      src: 'https://aroundann.co.kr/web/product/big/202207/e7a5cab0843c8f10bc1f443574c0a0c3.jpg',
      title: 'Painting bag_blue',
      sale: 30,
      price: 3800,
    },
  ]
  return (
    <div>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        spaceBetween={30}
        slideToClickedSlide={true}
        className="w-full px-5"
      >
        {bestList.map((item) => (
          <SwiperSlide key={item.src}>
            {({ isActive }) => <Card product={item} active={isActive}></Card>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperContainer
