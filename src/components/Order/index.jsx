import React from 'react'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'

const index = () => {
  return (
    <>
      <div className="">
        <ShippingInfo />
        <ProductInfo />
        <Coupon />
        <PayWay />
        <TotalPrice />
      </div>
      <OrderBtn />
    </>
  )
}

export default index
