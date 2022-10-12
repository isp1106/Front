import React from 'react'
import './index.css'
import {
  oneulBestList,
  oneulLastestList,
  oneulFollowingList,
} from '../../dummy/main'
import HeartIcon from '../common/HeartIcon'

const TodaySurge = ({ category }) => {
  let list
  let title
  switch (category) {
    case '인기':
      list = oneulBestList
      title = '급상승'
      break
    case '최신':
      list = oneulLastestList
      title = '최신'
      break
    case '팔로잉':
      list = oneulFollowingList
      title = '팔로잉'
      break
    default:
      return
  }
  return (
    <div className="mt-10">
      <h4 className="pl-5 font-bold mb-5 text-xl">오늘의 {title}</h4>
      <div className="product__list">
        {list.map(
          (
            { imgUrl, brandurl, brand, price, discount, userId, liked },
            index,
          ) => (
            // <div key={index} className="item__list">
            //   <div
            //     className="relative item w-[50vw-2px] h-[50vw] max-w-[300px] max-h-[300px] bg-cover"
            //     style={{
            //       backgroundImage: `url(${item.imgUrl})`,
            //     }}
            //   >
            //     <div className="absolute text-white flex flex-col right-[12px] top-[16px] items-center">
            //       <HeartIcon fill="#ffffff" size="22" />
            //       <span className="text-sm">{item.liked}</span>
            //     </div>
            //   </div>
            //   <div className="flex py-4 pl-5">
            //     <div
            //       className="w-[39px] h-[39px] bg-cover rounded-lg mr-[14px]"
            //       style={{
            //         backgroundImage: `url(${item.brandurl})`,
            //       }}
            //     ></div>
            //     <div className="flex flex-col text-sm font-medium">
            //
            //     </div>
            //   </div>
            // </div>

            <div className="w-full  [&:nth-child(2n)]:border-l-2 border-primary box-content overflow-hidden">
              <div className="flex relative justify-center align-items-center">
                <div className="absolute text-white flex flex-col right-[12px] top-[16px] items-center">
                  <HeartIcon fill="#ffffff" size="22" />
                  <span className="text-sm">{liked}</span>
                </div>
                <div className="w-full bg-cover justify-center after:content('') after:block ">
                  <img src={imgUrl} alt={userId} />
                </div>
              </div>
              <div className="flex px-5 py-3.5 border-y-2 border-primary text-primary text-sm">
                <div
                  className="w-[39px] h-[39px] bg-cover rounded-lg mr-3.5"
                  style={{
                    backgroundImage: `url(${brandurl})`,
                  }}
                ></div>
                <div className="flex flex-col text-sm font-medium">
                  <div className="text-black-800 truncate overflow-ellipsis">
                    {brand}
                  </div>
                  <div className="flex">
                    <span className=" text-primary">
                      {discount && discount}%
                    </span>
                    <span className="ml-[5px] text-black">
                      {price.toLocaleString()}¥
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default TodaySurge
