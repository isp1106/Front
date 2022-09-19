import React from 'react'
import Button from '../../components/common/Button'

const Finish = () => {
  return (
    <>
      <h2 className="text-[30px] font-medium mt-[35px]">
        <strong className="font-bold">회원가입을</strong>
        <br />
        축하드려요!
      </h2>
      <Button classprop="mt-[291px] bg-primary text-white">
        로그인하러 가기
      </Button>
    </>
  )
}

export default Finish
