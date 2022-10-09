import React, { useState } from 'react'
import { detailProducts as list } from '../../../dummy/detail'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSecletedOption,
  chnageCount,
} from '../../../store/slices/productSlice'

const ModalContent = () => {
  const { thumbnail, price, productName, size } = list
  const productCount = useSelector((state) => state.product).count
  const dispatch = useDispatch()
  const onChangeHandler = (e) => {
    dispatch(setSecletedOption(e.target.value))
  }
  const countChangeHandler = (e) => {
    if (e == '-1' && productCount === 1) return
    dispatch(chnageCount(e))
  }
  return (
    <div>
      <div className="px-6 pt-6">
        <select
          onChange={onChangeHandler}
          defaultValue="option"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="option">색상/사이즈 선택</option>
          {size.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="pt-6">
          <div className="relative p-4 bg-white-400">
            <div className="text-sm">{list.productName}</div>
            <div className="mt-3 flex justify-between items-center">
              {/* 버튼 컴포넌트 */}
              <div className="rounded py-1 w-[6rem] grid grid-cols-3 text-center border border-black-200 text-sm">
                <div
                  className="border-r"
                  onClick={() => countChangeHandler(-1)}
                >
                  -
                </div>
                <div className="">{productCount}</div>
                <div
                  className="border-l"
                  onClick={() => countChangeHandler(+1)}
                >
                  +
                </div>
              </div>
              <div className="text-sm">
                {parseInt((list.price * (100 - list.sale)) / 100) *
                  productCount}
                ¥
              </div>
            </div>
          </div>
          <div className="py-5 flex justify-end items-center gap-2">
            <div className="text-xs">총상품 금액</div>
            <div className="">
              <strong className="font-bold text">
                {parseInt((list.price * (100 - list.sale)) / 100) *
                  productCount}
              </strong>
              ¥
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContent
