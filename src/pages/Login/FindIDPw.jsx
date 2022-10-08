import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FindId from '../../components/SignIn/FindId'
import FindPw from '../../components/SignIn/FindPw'
import TabList from '../../components/common/TabList'
const tablist = ['아이디 찾기', '비밀번호 찾기']

const FindID = () => {
  const { state } = useLocation()
  const [select, setSelect] = useState(state ? state : tablist[0])
  const navigate = useNavigate()
  console.log(state)
  const onClickHandler = (idx) => {
    setSelect(tablist[idx])
  }

  return (
    <div>
      <TabList
        tablist={tablist}
        select={select}
        onClickHandler={onClickHandler}
      />
      {select === tablist[1] ? <FindPw /> : <FindId />}
    </div>
  )
}

export default FindID
