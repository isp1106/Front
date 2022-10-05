import React from 'react'
import ContentBox from './ContentBox'

const QnAList = ({ questions }) => {
  return (
    <>
      {questions.map((item) => (
        <ContentBox item={item} key={item.id} />
      ))}
    </>
  )
}

export default QnAList
