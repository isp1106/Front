import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabList from './TabList'
import ContentBox from './ContentBox'
import { useGetQuestionsQuery } from '../../../store/api/questionSlice'
import QnABtn from './QnABtn'
const tablist = ['최근 1개월', '기간조회']

const index = () => {
  const { data: questions, isLoading, isError } = useGetQuestionsQuery()
  const [select, setSelect] = useState(tablist[0])
  const navigate = useNavigate()
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
  }
  const goToWrite = () => {
    navigate('/my/qna/write')
  }

  return (
    <>
      <TabList
        tablist={tablist}
        select={select}
        onClickHandler={onClickHandler}
      />
      {/* api응답값이 날짜별로 오는지 확인 한 후 api연결 */}
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
            // 기간 조회 api가 따로 있는지?
            <></>
          )}
        </>
      )}
      <QnABtn onClick={goToWrite} />
    </>
  )
}

export default index
