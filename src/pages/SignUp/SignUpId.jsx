import React from 'react'
import Button from '../../components/common/Button'
import Title from '../../components/SignUp/Title'
import NextBtn from '../../components/SignUp/NextBtn'
import Input from '../../components/SignUp/Input'
const SignUpIdForm = () => {
  return (
    <>
      <Title title="아이디" text="생성" />
      <div className="mt-36">
        <Input text="아이디" />
        <Button classprop=" border border-black-100 mt-6 gap-2">
          중복확인
        </Button>
      </div>
      <NextBtn next="pwform" />
    </>
  )
}

export default SignUpIdForm
