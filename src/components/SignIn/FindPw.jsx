import React, { useState } from 'react'
import NextBtn from '../common/NextBtn'
import Email from './Email'
import Modal from '../common/Modal'
const EMAIL_REGEX =
  /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

const FindPw = () => {
  const [id, setID] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [alret, setAlret] = useState('')
  const [email, setEmail] = useState(null)
  const onClick = () => {
    //비밀번호 찾기 api
    console.log('비밀번호 찾기 이메일전송', id)
    setIsOpen(true)
  }
  const onChangeIDHandler = (e) => {
    const value = e.target.value
    setID(value)
  }

  const onChangeHandler = (e) => {
    const value = e.target.value
    setEmail(value)

    setTimeout(() => {
      EMAIL_REGEX.test(email)
        ? setAlret(null)
        : setAlret('올바르지 않은 이메일입니다.')
    }, 500)
  }

  return (
    <div className="mt-[36px] px-5">
      <label htmlFor="id">아이디</label>
      <div className="mt-4 relative flex box-border border border-neutral-200 rounded items-center border-box mb-[38px]">
        <input
          onChange={onChangeIDHandler}
          name="id"
          placeholder="아이디를 입력해주세요."
          className="px-3 border-none h-[3rem] flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
        />
      </div>
      <Email onChange={onChangeHandler} alret={alret} />
      <NextBtn onClick={onClick} disabled={id && EMAIL_REGEX.test(email)}>
        비밀번호 찾기
      </NextBtn>
      {isOpen && (
        <Modal
          title="입력하신 이메일 주소로 임시 비밀번호를 발송했습니다."
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default FindPw
