import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'
import { useSelector } from 'react-redux'
// productid로 조회

const index = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const paynowHandler = () => {
    //api호출
    //성공시
    navigate('/order/completed', { state: state })
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
