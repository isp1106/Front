import React from 'react'
import OrderPage from '../components/Order/Order'
import Header from '../components/layout/Header'

const Order = () => {
  return (
    <div>
      <Header>결제</Header>
      <div className="pt-[55px]">
        <OrderPage />
      </div>
    </div>
  )
}

export default Order
