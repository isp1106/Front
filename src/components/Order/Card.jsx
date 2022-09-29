import React from 'react'

const Card = ({ item }) => {
  const { url, brand, name, price, discount, sale, stock, count } = item

  return (
    <div className="flex text-[14px] mb-[12px] pl-5">
      <div
        className=" flex-shrink w-[148px] h-[148px] bg-cover  overflow-hidden "
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div className="ml-[19px] grow-1 py-1">
        <div className="font-bold leading-[20px] ">{brand}</div>
        <div className="w-[169px] h-[36px] text-xs text-black-800 leading-[18px]">
          {name}
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-primary h-[20px] self-end flex text-center items-center justify-center text-xs">
            옵션 : {count}
          </div>
          <div className="text-center">
            <div className=" text-xs text-black-600 line-through">
              {price} ¥
            </div>
            <div className="text-[14px]">{discount} ¥</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
