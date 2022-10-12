import React from 'react'
import TopContent from './TopContent'
import Header from './Header'
import OrderProductInfo from './OrderProductInfo'
import PaymentInfo from './PaymentInfo'
import CompletedBtn from './CompletedBtn'
import Error from './Error'
import { useLocation } from 'react-router-dom'

const index = () => {
  const { state } = useLocation()
  return (
    <>
      <div className="px-5">
        <Header />
        <TopContent />
        <OrderProductInfo items={state} />
        <PaymentInfo items={state} />
        {/* 
      에러가 난경우
      <Error /> */}
      </div>
      <CompletedBtn />
    </>
  )
}

export default index
