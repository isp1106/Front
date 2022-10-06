import React from 'react'

const ModalContent = ({ chnageCount, count }) => {
  return (
    <div>
      <div className="px-6 pt-6">
        <select
          defaultValue="option"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="option">색상/사이즈 선택</option>
          <option value="US">FF</option>
        </select>
        <div className="pt-6">
          <div className="relative p-4 bg-white-400">
            <div className="text-sm">Black_FREE</div>
            <div className="mt-3 flex justify-between items-center">
              {/* 버튼 컴포넌트 */}
              <div className="rounded py-1 w-[6rem] grid grid-cols-3 text-center border border-black-200 text-sm">
                <div className="border-r" onClick={() => chnageCount(-1)}>
                  -
                </div>
                <div className="">{count}</div>
                <div className="border-l" onClick={() => chnageCount(+1)}>
                  +
                </div>
              </div>
              <div className="text-sm">256,500원</div>
            </div>
          </div>
          <div className="py-5 flex justify-end items-center gap-2">
            <div className="text-xs">총상품 금액</div>
            <div className="">
              <strong className="font-bold text">256,500 </strong>원
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalContent
