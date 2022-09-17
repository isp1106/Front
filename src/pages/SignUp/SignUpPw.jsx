import React from 'react'
import { useState } from 'react'
import Input from '../../components/SignUp/Input'
import NextBtn from '../../components/SignUp/NextBtn'
import Title from '../../components/SignUp/Title'

const SignUpPw = () => {
  const [type, setType] = useState('password')

  const changeTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
  }
  return (
    <>
      <Title title="비밀번호" text="생성" />
      <div className="mt-36">
        <Input
          text="비밀번호"
          type={type}
          changeTypeHandler={changeTypeHandler}
          name="pw"
        />
      </div>
      <NextBtn next="infoform" />
    </>
  )
}

export default SignUpPw
