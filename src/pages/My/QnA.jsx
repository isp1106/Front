import React from 'react'
import Header from '../../components/layout/Header'
import QnAComp from '../../components/My/QnA'

const QnA = () => {
  return (
    <>
      <Header>1:1 문의</Header>
      <div className="pt-[55px]">
        <QnAComp />
      </div>
    </>
  )
}

export default QnA
