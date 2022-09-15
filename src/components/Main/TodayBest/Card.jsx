import React from 'react'
import heart from '/public/assets/like.svg'

const Card = ({ product, active }) => {
  return (
    <div className="w-56 h-80">
      <div
        className="w-56 h-56 bg-cover bg-center rounded-full overflow-hidden"
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
          <div className="absolute right-1 bottom-1">
            <img src={heart} alt="heart" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
