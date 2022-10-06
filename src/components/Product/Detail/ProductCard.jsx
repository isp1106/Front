import React from 'react'

const ProductCard = ({ item, count }) => {
  const { brand, thumbnail, product, sale, price, liked, id } = item
  return (
    <div className="w-full pt-10 pb-2">
      <div key={id} className=" flex tems-center justify-between  px-10">
        <div
          className="new-style w-[119px] h-[119px] bg-cover rounded-full overflow-hidden"
          style={{
            backgroundImage: `url(${thumbnail})`,
          }}
        ></div>
        <div className="px-2 flex flex-col justify-center gap-1">
          <h4 className="font-bold text-sm">{brand}</h4>
          <p className="text-xs text-black-800 truncate w-[142px]">{product}</p>
          <div>
            <span className="text-sm text-black-600 font-medium">
              ¥
              <strong className="ml-1">
                {(
                  parseInt((price * (100 - sale)) / 100) * count
                ).toLocaleString()}
              </strong>
            </span>
          </div>
          <div className="text-sm text-primary">1개</div>
        </div>
      </div>
      <div className="text-center py-6 text-sm text-black-800">
        장바구니에 상품을 담았습니다.
      </div>
    </div>
  )
}

export default ProductCard
