import React, { useState } from 'react'
import HeartIcon from '../../components/common/HeartIcon'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { cls } from '../../utils/index'

import { detailProducts } from '../../dummy/detail'
import { ratingStar } from '../../utils/star'
const Explanation = () => {
  const [open, setOpen] = useState(false)
  const toggleBtn = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="w-full flex-1 mt-5 pb-2">
      <div className="pl-5 pr-5 border-b border-black-200 flex-grow pb-5">
        <div className="flex flex items-center w-full justify-between">
          <div className="flex items-center gap-1">
            <span className="text-color-800 text-sm font-bold">
              {detailProducts.brand}
            </span>
            <GoBackIcon className="rotate-180 w-[14px] h-[14px]" />
          </div>
          <HeartIcon size="22px" />
        </div>
        <h2 className="mt-2 font-bold">{detailProducts.product_name}</h2>
        <div className="flex items-center my-3">
          <div
            className="ratingStar mr-2"
            style={{
              backgroundPositionY: ratingStar(detailProducts.star),
            }}
          ></div>
          <span className="text-black-600 text-xs underline">
            {detailProducts.review_count}개의 리뷰보기
          </span>
        </div>
        <div className="flex items-end">
          <div className="flex flex-col mr-4">
            <span className="text-black-400 text-xs line-through ">
              {detailProducts.price} ¥
            </span>
            <span>{detailProducts.discount}%</span>
          </div>
          <div className="flex-grow text-xl font-bold">
            {(
              (detailProducts.price * (100 - detailProducts.discount)) /
              100
            ).toFixed(0)}
            ¥
          </div>
          <div className="text-white bg-point py-2 px-2">
            {detailProducts.delivery === 'free' && '무료배송 상품'}
          </div>
        </div>
      </div>
      <div className="border-b border-black-200 pl-5 pr-5 pb-4">
        <p className="font-bold mt-5">컬러</p>
        <div className="flex gap-4 ">
          {detailProducts.color.map((item, idx) => (
            <img
              src={item}
              key={idx}
              width="90px"
              className={cls(idx === 0 && 'border border-primary')}
            />
          ))}
        </div>
      </div>
      <div className="">
        <div
          className="flex px-5 border-b border-black-200 py-5"
          onClick={toggleBtn}
        >
          <p className="flex-grow font-bold">최대혜택가</p>
          <div className="flex items-center">
            <span className="mr-5 text-primary font-bold">40%</span>
            <span className="mr-1 font-bold">
              ¥ {((detailProducts.price * (100 - 40)) / 100).toFixed(0)}
            </span>
            <GoBackIcon
              width="14px"
              height="14px"
              className={cls(open ? 'rotate-90' : '-rotate-90')}
            />
          </div>
        </div>
        {open && (
          <div>
            <div className="px-5 py-5 border-b border-black-200 ">
              <div className=" text-sm text-black-600 font-bold">상품할인</div>
              <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
                <span>상품 기본 할인</span>
                <span>¥ -1,455</span>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-black-200 ">
              <div className="text-sm text-black-600 font-bold">쿠폰 할인</div>
              <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
                <span>¥ 4000 이상 구매시 5% 할인</span>
                <span>¥ -1,455</span>
              </div>
              <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
                <span>등급 회원 할인 5%</span>
                <span>¥ -1,455</span>
              </div>
            </div>
            <div className="px-5 py-5 border-b border-black-200 ">
              <div className="text-sm text-black-600 font-bold">
                보유 적립금
              </div>
              <div className="mt-[11px] text-sm text-black-600 text-[12px] flex justify-between">
                <span>보유 적릭금 모두 사용</span>
                <span>450P</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Explanation
