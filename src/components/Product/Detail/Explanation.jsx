import React, { useState } from 'react'
import HeartIcon from '../../common/HeartIcon'
import Coupon from '../../common/Coupon'
import { cls } from '../../../utils/index'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { detailProducts } from '../../../dummy/detail'
import { ratingStar } from '../../../utils/star'
const Explanation = () => {
  const [open, setOpen] = useState(false)
  const toggleBtn = () => {
    setOpen((prev) => !prev)
  }
  const { brand, productName, price, sale, star, reviewCount, color } =
    detailProducts
  return (
    <div className="w-full flex-1 mt-5 pb-2">
      <div className="pl-5 pr-5 border-b border-black-200 flex-grow pb-7">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-1">
            <span className="text-color-800 text-sm font-bold">{brand}</span>
            <GoBackIcon className="rotate-180 w-[14px] h-[14px]" />
          </div>
          <HeartIcon size="22px" />
        </div>
        <h2 className="mt-2 font-bold">{productName}</h2>
        <div className="flex items-center my-3">
          <div
            className="ratingStar mr-2"
            style={{
              backgroundPositionY: ratingStar(star),
            }}
          ></div>
          <span className="text-black-600 text-xs underline">
            {reviewCount}개의 리뷰보기
          </span>
        </div>
        <div className="flex items-end">
          <div className="flex flex-col mr-4">
            <span className="text-black-400 text-xs line-through items-center">
              {price} ¥
            </span>
            <span className="text-xl font-bold text-primary mr-2">{sale}%</span>
          </div>
          <div className="flex-grow text-xl font-bold">
            {parseInt((price * (100 - sale)) / 100)}¥
          </div>
          <div className="text-white bg-point py-2 px-3 rounded-[5px] font-medium">
            {price > 5000 && '무료배송 상품'}
          </div>
        </div>
      </div>
      {/* <div className="border-b border-black-200 pl-5 pr-5 pb-4 ">
        <p className="font-bold mt-5 my-4">컬러</p>
        <div className="flex gap-4 ">
          {color.map((item, idx) => (
            <img
              src={item}
              key={idx}
              width="90px"
              className={cls(idx === 0 && 'border border-primary')}
            />
          ))}
        </div>
      </div> */}
      <Coupon>
        <span className="mr-5 text-primary font-bold">40%</span>
        <span className="mr-1 font-bold">
          ¥ {parseInt((price * (100 - sale)) / 100)}
        </span>
      </Coupon>
    </div>
  )
}

export default Explanation
