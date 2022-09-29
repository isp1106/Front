import React from 'react'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'

const index = () => {
  return (
    <>
      <div className="">
        <ShippingInfo />
        <ProductInfo />
        <Coupon />
      </div>
    </>
  )
}

export default index
