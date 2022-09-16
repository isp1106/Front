import React from 'react'
import heart from '/public/assets/heart_icon_full.svg'
import cart from '/public/assets/shoppingBag_icon_color.svg'

const Card = ({ product, active }) => {
  return (
    <div className="w-[230px] h-80 mb-24">
      <div
        className="w-[230px] h-[230px] bg-cover bg-center rounded-full overflow-hidden"
        style={active ? { border: '2px solid #D86145' } : { border: 'none' }}
      >
        <img src={product.src} alt={product.src} />
      </div>
      <div className="mt-8 relative">
        <div className="text-sm text-[#4B4B4B] mt-7.5">[{product.title}]</div>
        <div className="text-xl text-[#2B2B2B] font-bold mt-1.5">
          <span className="text-primary mr-2.5">{product.sale}%</span>
          {product.price} ¥
        </div>
        {active ? (
          <div className="absolute flex right-1 bottom-0">
            <img src={heart} alt="heart" className="h-5" />
            <img src={cart} alt="cart" className="ml-6 h-5" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
