import React from 'react'
import { useLocation } from 'react-router-dom'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'

const index = () => {
  const { state } = useLocation()
  const paynowHandler = () => {
    alert('결제가 정상적으로 처리되었습니다.')
  }
  return (
    <>
      <ShippingInfo />
      <ProductInfo items={state} />
      <Coupon />
      <PayWay />
      <TotalPrice items={state} />
      <OrderBtn items={state} paynowHandler={paynowHandler} />
    </>
  )
}

export default index
