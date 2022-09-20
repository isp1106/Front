import React from 'react'
import heart from '/public/assets/heart-on.svg'
import cart from '/public/assets/bag-on.svg'

const Card = ({ product, active }) => {
  const { url, title, sale, price } = product
  return (
    <div className="w-[230px] h-80 mb-24">
      <div
        className="w-[230px] h-[230px] bg-cover bg-center rounded-full overflow-hidden"
        style={active ? { border: '2px solid #D86145' } : { border: 'none' }}
      >
        <img src={url} alt={url} />
      </div>
      <div className="mt-8 relative">
        <div className="text-sm text-[#4B4B4B] mt-7.5">[{title}]</div>
        <div className="text-xl text-[#2B2B2B] font-bold mt-1.5">
          <span className="text-primary mr-2.5">{sale}%</span>
          {price} ¥
        </div>
        {active ? (
          <div className="absolute flex right-1 bottom-0 gap-2">
            <img src={heart} alt="heart" width="30" hegiht="30" />
            <img src={cart} alt="cart" width="30" hegiht="30" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
