import React from 'react'
import NextBtn from '../../components/SignUp/NextBtn'
const TermService = () => {
  return (
    <div>
      이용약관 샬랴샬랴
      {/* NextBtn에 disabled를 true로 넘기면 버튼 활성화되어요! */}
      <NextBtn next="idform" disabled={true} />
    </div>
  )
}

export default TermService
