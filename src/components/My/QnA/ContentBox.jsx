import React, { useState } from 'react'
import { cls } from '../../../utils'
import BackIcon from '../../common/BackIcon'

const ContentBox = ({ item }) => {
  return (
    <>
      <div className="mb-5 px-5">
        <div className="flex items-center justify-between py-4 ">
          <p className="font-bold">{item.createdDate}</p>
          <div className="flex items-center gap-1">
            <span className="text-xs">답변상세보기</span>
            <BackIcon fill="#252525" size={14} className="rotate-180" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="text-primary font-bold">{item.answerYn}</div>
          <div className="text-sm font-bold">{item.type}</div>
          <div className="text-xs">{item.title}</div>
        </div>

        {item.prdouct && (
          <div className="pt-4 border-t border-black-200 ">
            <div className="flex mb-4 gap-2">
              <div
                className="relative flex-shrink w-[56px] h-[56px] bg-cover rounded-md overflow-hidden "
                style={{
                  backgroundImage: `url(${item.prdouct?.thumbnail})`,
                }}
              ></div>
              <div className="text-xs flex flex-col gap-1">
                <div className="font-bold">{item.prdouct?.brand}</div>
                <div className="text-black-800">{item.prdouct?.product}</div>
                <div className="text-black-600">
                  수량 : {item.prdouct?.count}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-[10px] bg-white-200 "></div>
    </>
  )
}

export default ContentBox
