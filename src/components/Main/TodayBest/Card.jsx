import React from 'react'
import HeartIcon from '../../common/HeartIcon'
import cart from '/public/assets/bag-black.svg'
import { useNavigate } from 'react-router-dom'
import { cls } from '../../../utils'

const Card = ({ product, active }) => {
  const {
    detailThumbList,
    thumbnail,
    productName,
    sale,
    price,
    liked,
    productId,
  } = product
  const navigate = useNavigate()
  return (
    <div
      className="w-[230px] h-80 mb-24"
      onClick={() => navigate(`/product/${productId}`)}
    >
      <div
        className={cls(
          'w-[230px] h-[230px] bg-cover bg-center rounded-full overflow-hidden',
          active ? 'border-2 border-primary' : 'border-2 border-black-200',
        )}
      >
        <img src={thumbnail} alt={productName} />
      </div>
      <div className="mt-8 relative">
        <div className="text-sm text-black-800 font-medium mt-7.5">
          [{productName}]
        </div>
        <div className="text-xl text-black-100 font-bold mt-1.5">
          <span className="text-primary mr-2.5">{sale}%</span>
          {price} ¥
        </div>
        {active ? (
          <div className="absolute flex right-1 bottom-0 gap-3">
            <HeartIcon size="25" off={liked} fill={'#000'} />
            <img src={cart} alt="cart" width="25" hegiht="25" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Card
