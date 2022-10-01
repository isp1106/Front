import React from 'react'
import { useLocation } from 'react-router-dom'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'

const index = () => {
  const { state } = useLocation()
  return (
    <>
      <div className="">
        <ShippingInfo />
        <ProductInfo items={state} />
        <Coupon />
        <PayWay />
        <TotalPrice items={state} />
      </div>
      <OrderBtn />
    </>
  )
}

export default index
