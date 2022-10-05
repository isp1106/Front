import React from 'react'
import heart from '/public/assets/heart-on.svg'

function Card({ data }) {
  const { brand, productName, image, price, sale } = data
  const saleCost = parseInt((price * (100 - sale)) / 100)

  return (
    <div>
      <div className="relative">
        <div className="w-full bg-cover overflow-hidden relative justify-center after:content('') after:block after:pb-[100%]">
          <img src={image} alt="kirsh product" className="absolute" />
        </div>
        <div className="absolute w-[13%] max-w-[35px] top-2.5 right-2.5">
          <img src={heart} alt="heart" />
        </div>
      </div>
      <div className="px-5 py-2.5">
        <div>
          <div className="text-sm font-bold">{brand}</div>
          <div className="text-xs font-normal text-black-800 truncate">
            {productName}
          </div>
          <div className="test-xs font-medium text-black-600">{price} ¥</div>
        </div>
        <div className="flex text-sm font-bold">
          <div className="text-primary mr-3">{sale}%</div>
          <div className="text-black-100">{saleCost} ¥</div>
        </div>
      </div>
    </div>
  )
}

export default Card
