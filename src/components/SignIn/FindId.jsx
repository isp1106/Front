import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import NextBtn from '../common/NextBtn'
const EMAIL_REGEX =
  /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

const FindId = () => {
  const [alret, setAlret] = useState('')
  const [email, setEmail] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => {
    //아이디 찾기 api
    console.log('이메일전송')
    setIsOpen(true)
  }
  const onChangeHandler = (e) => {
    const { value } = e.target
    setEmail(value)
  }
  const invalidCheckHandler = () => {
    EMAIL_REGEX.test(email)
      ? setAlret(null)
      : setAlret('올바르지 않은 이메일입니다.')
  }

  return (
    <>
      <div className="px-5 mt-[52px]">
        <label>이메일</label>
        <div className="mt-4 mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
          <input
            placeholder="이메일을 입력 해 주세요."
            className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            onBlur={invalidCheckHandler}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <p className="px-5 mt-[8px] font-[11px] text-red-600 text-[12px]">
        {alret}
      </p>
      <NextBtn onClick={() => onClick()} disabled={!alret}>
        아이디 찾기
      </NextBtn>
      {isOpen && (
        <Modal
          title="입력하신 이메일 주소로 아이디를 발송했습니다."
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default FindId
