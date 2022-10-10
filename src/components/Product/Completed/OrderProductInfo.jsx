import React from 'react'

const OrderProductInfo = () => {
  return (
    <div className="py-9 border-b border-black-200">
      <h3 className="mb-3.5">주문상품정보</h3>
      <div className="flex ">
        <div
          className="mr-5 relative flex-shrink w-[100px] h-[100px] bg-cover  overflow-hidden "
          style={{
            backgroundImage: `url("http://asq.kr/XHkPC05q4U")`,
          }}
        ></div>
        <div className="flex flex-col gap-2 w-[calc(100vw-120px)]">
          <p className="text-sm font-bold">Kirsh</p>
          <p className="text-xs text-black-800">Wrinkle bag_Black</p>
          <p className="text-xs text-black-600">6500 ¥ </p>
          <div className="text-sm font-bold flex justify-between">
            <div className="text-primary">1개 </div>
            <div>결제완료</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderProductInfo
