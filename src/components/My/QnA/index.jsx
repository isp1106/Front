import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabList from './TabList'
import QnAList from './QnAList'
import QnABtn from './QnABtn'
import { useGetQuestionsQuery } from '../../../store/api/questionSlice'
const tablist = ['답변완료', '미답변']

const index = () => {
  const { data: questions, isLoading, isError } = useGetQuestionsQuery()

  const answerYes = questions?.filter((item) => item.answerYn === '답변완료')
  const answerNo = questions?.filter((item) => item.answerYn !== '답변완료')

  const [select, setSelect] = useState(tablist[0])
  const navigate = useNavigate()
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
  }
  const goToWrite = () => {
    navigate('/my/qna/write')
  }

  if (isLoading) return <span>로딩중...</span>
  if (isError) return <span>에러발생...</span>

  return (
    <>
      <TabList
        tablist={tablist}
        select={select}
        onClickHandler={onClickHandler}
      />

      {select === tablist[0] ? (
        <QnAList questions={answerYes} />
      ) : (
        <QnAList questions={answerNo} />
      )}

      <QnABtn onClick={goToWrite} />
    </>
  )
}

export default index
