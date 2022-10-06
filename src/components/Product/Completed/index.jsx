import React from 'react'
import TopContent from './TopContent'
import Header from './Header'
import OrderProductInfo from './OrderProductInfo'
import PaymentInfo from './PaymentInfo'
import Error from './Error'

const index = () => {
  return (
    <div className="px-5">
      <Header />
      <TopContent />
      <OrderProductInfo />
      <PaymentInfo />
      {/* 
      에러가 난경우
      <Error /> */}
    </div>
  )
}

export default index
