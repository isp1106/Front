import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabList from './TabList'
import QnAList from './QnAList'
import QnABtn from './QnABtn'
const tablist = ['최근 1개월', '기간조회']

const index = () => {
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
      <QnAList select={select} tablist={tablist} />
      <QnABtn onClick={goToWrite} />
    </>
  )
}

export default index
