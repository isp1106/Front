import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/Header'
import InquireProducts from '../../components/My/QnAWrite/InquireProducts'

const QnA = () => {
  return (
    <>
      <Header>1:1 문의</Header>
      <div className="pt-[55px]">
        <Outlet />
      </div>
      <InquireProducts />
    </>
  )
}

export default QnA
