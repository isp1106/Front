import React from 'react'
import OrderPage from '../components/Order'
import GoBack from '../components/common/GoBack'
import Header from '../components/layout/Header'

const Order = () => {
  return (
    <div>
      {/* <GoBack className="border-b border-black-100">
        <h2>결제</h2>
      </GoBack> */}
      <Header />
      <div className="pt-[55px]">
        <OrderPage />
      </div>
    </div>
  )
}

export default Order
