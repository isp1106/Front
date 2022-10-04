import React from 'react'
import ContentBox from './ContentBox'
import PerioContentBox from './PerioContentBox'
import { useGetQuestionsQuery } from '../../../store/api/questionSlice'

const QnAList = ({ select, tablist }) => {
  const { data: questions, isLoading, isError } = useGetQuestionsQuery()

  return (
    <>
      {isLoading ? (
        <span>로딩중..</span>
      ) : isError ? (
        <span>에러발생</span>
      ) : questions.length === 0 ? (
        <div className="w-full flex items-center justify-center mt-[40vw] text-black-600">
          <p>문의하신 내역이 없습니다.</p>
        </div>
      ) : (
        <>
          {select === tablist[0] ? (
            <>
              {questions.map((item) => (
                <ContentBox item={item} key={item.id} />
              ))}
            </>
          ) : (
            <PerioContentBox />
          )}
        </>
      )}
    </>
  )
}

export default QnAList
