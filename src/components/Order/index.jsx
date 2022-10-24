import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ShippingInfo from './ShippingInfo'
import ProductInfo from './ProductInfo'
import Coupon from '../common/Coupon'
import PayWay from './PayWay'
import TotalPrice from './TotalPrice'
import OrderBtn from './OrderBtn'

// productid로 조회

const index = () => {
  const { state } = useLocation()
  const [select, setSelect] = useState('신용/체크카드')
  const selectHandler = (item) => {
    setSelect(item)
  }
  return (
    <>
      <ShippingInfo />
      <ProductInfo items={state} />
      <Coupon />
      <PayWay onClick={selectHandler} select={select} />
      <TotalPrice items={state} />
      <OrderBtn items={state} select={select} />
    </>
  )
}

export default index
