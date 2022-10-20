import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'
import { useCookies } from 'react-cookie'

// productid로 조회

const index = () => {
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.accessToken
  const { state } = useLocation()
  return (
    <>
      <ShippingInfo isMember={Boolean(token)} />
      <ProductInfo items={state} />
      <Coupon />
      <PayWay />
      <TotalPrice items={state} />
      <OrderBtn items={state} />
    </>
  )
}

export default index
