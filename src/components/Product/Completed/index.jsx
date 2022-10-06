import React from 'react'
import TopContent from './TopContent'
import Header from './Header'
import OrderProductInfo from './OrderProductInfo'
import PaymentInfo from './PaymentInfo'

const index = () => {
  return (
    <div className="px-5">
      <Header />
      <TopContent />
      <OrderProductInfo />
      <PaymentInfo />
    </div>
  )
}

export default index
