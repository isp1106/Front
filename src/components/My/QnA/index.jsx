import React, { useState } from 'react'
import TabList from './TabList'
import ContentBox from './ContentBox'
import { useGetQuestionsQuery } from '../../../store/api/questionSlice'
const tablist = ['최근 1개월', '기간조회']

const index = () => {
  const { data: questions, isLoading, isError } = useGetQuestionsQuery()
  const [select, setSelect] = useState(tablist[0])
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
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
      ) : (
        questions && (
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
        )
      )}
    </>
  )
}

export default index
