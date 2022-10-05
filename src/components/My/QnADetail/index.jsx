import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetQustionQuery } from '../../../store/api/questionSlice'
import Card from '../QnA/Card'
import Content from './Content'
import Answer from './Answer'

const index = () => {
  const params = useParams()
  const { data: list, isLoading, isError } = useGetQustionQuery(params.id)

  return (
    <>
      {isLoading ? (
        <span>로딩중...</span>
      ) : isError ? (
        <span>에러발생</span>
      ) : (
        list && (
          <>
            <div className="px-5 mt-5 py-4 border-b border-black-200 font-bold">
              {list.createdDate}
            </div>
            <div className="px-5 py-4 text-primary font-bold">{list.type}</div>

            {list.product && <Card item={list.product} />}
            <Content item={list} />
            {list.answerYn === '답변완료' && <Answer item={list} />}
          </>
        )
      )}
    </>
  )
}

export default index
