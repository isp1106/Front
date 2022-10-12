import React from 'react'
import { detailProducts } from '../../../dummy/detail'

const Inquiry = () => {
  return (
    <>
      <div className=" pb-6 ">
        <div className="flex justify-between px-5 items-center border-primary border-b">
          <h4 className="font-bold my-4">
            상품 문의 <span>({detailProducts.review.count})</span>
          </h4>
          <span className="text-sm text-black-600 font-medium">Q&A쓰기</span>
        </div>
        <div>
          {detailProducts.Inquiry.map((item, idx) => (
            <div className="py-5  border-b border-black-400" key={idx}>
              <div className="pl-5 text-xs text-black-600 ">
                <div className="flex gap-3">
                  <span>{item.date}</span>
                  <span>{item.userId}</span>
                </div>
                <div className=" mt-2">[{item.category}]</div>
              </div>
              <p className="mt-3 pl-5 text-xs ellipsis w-[257px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Inquiry
