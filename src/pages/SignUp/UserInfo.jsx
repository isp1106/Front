import React, { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import NextBtn from '../../components/SignUp/NextBtn'
import Title from '../../components/SignUp/Title'
const UserInfo = () => {
  const { state } = useLocation()
  const [inputValue, setInputValue] = useState({
    id: state,
    pw: state,
    email: '',
    firstName: '',
    lastName: '',
    firstNameRuby: '',
    lastNameRuby: '',
    telNum: '',
    postNum: '',
  })

  const ChangeHandler = useCallback((e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  })
  const [alret, setAlret] = useState({
    email: '',
    lastName: '',
    firstNameRuby: '',
    lastNameRuby: '',
    telNum: '',
    postNum: '',
  })
  
  const telOptions = ['Japan(+81)', 'Korea(+82)']
  const nationOptions = ['Japan(JP/JPN)', 'Korea(KR/KOR)']
  return (
    <>
      <div className="px-5">
        <Title title="정보" text="입력" />
        <div className="mt-16">
          <label
            htmlFor="loginJoinMembershipEmail"
            className="inline-block font-bold leading-4 mb-8"
          >
            이메일
          </label>
          <div className="relative flex box-border border border-neutral-200 rounded items-center border-box">
            <input
              value={inputValue['email']}
              onChange={ChangeHandler}
              name="email"
              placeholder="이메일을 입력해주세요."
              className="px-3 w-full border-none h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            />
            <button className="absolute right-[0.625rem] w-[5.438rem] h-[1.563rem] text-xs border border-primary text-primary rounded font-medium">
              중복확인
            </button>
          </div>
          <label
            htmlFor="loginJoinMembershipName"
            className="inline-block font-bold leading-4 mb-8 mt-9"
          >
            이름
          </label>
          <div className="flex">
            <input
              name="firstName"
              value={inputValue['firstName']}
              onChange={ChangeHandler}
              placeholder="성"
              className="pl-3 w-full h-[3rem] flex-initial box-border w- py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded mr-[0.813rem]"
            />
            <input
              name="lastName"
              value={inputValue['lastName']}
              onChange={ChangeHandler}
              placeholder="이름"
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <label
            htmlFor="loginJoinMembershipName"
            className="inline-block font-bold leading-4 mb-8 mt-9"
          >
            후리가나
          </label>
          <div className="flex">
            <input
              name="firstNameRuby"
              value={inputValue['firstNameRuby']}
              onChange={ChangeHandler}
              placeholder="성"
              className="pl-3 w-full h-[3rem] flex-initial box-border w- py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded mr-[0.813rem]"
            />
            <input
              name="lastNameRuby"
              value={inputValue['lastNameRuby']}
              onChange={ChangeHandler}
              placeholder="이름"
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <label
            htmlFor="loginJoinMembershipTel"
            className="inline-block font-bold leading-4 mb-8 mt-9"
          >
            전화번호
          </label>
          <div className="flex items-center">
            <select
              onChange={ChangeHandler}
              name="tel"
              className="text-black-400 p-[0.625rem] pr-[1.5rem] h-[3rem] flex-initial box-border rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded bg-[url('/public/assets/select_down.svg')] bg-no-repeat bg-[center_right_0.625rem]"
            >
              {telOptions &&
                telOptions.map((option) => {
                  return (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  )
                })}
            </select>
            <span className="mx-[0.625rem] text-black-200"> - </span>
            <input
              name="telNum"
              onChange={ChangeHandler}
              value={inputValue['telNum']}
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <label
            htmlFor="loginJoinMembershipNation"
            className="inline-block font-bold leading-4 mb-8 mt-9"
          >
            국가
          </label>
          <div className="flex">
            <select
              name="nation"
              onChange={ChangeHandler}
              className="text-black-400 pl-3 w-full h-[3rem] flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 rounded bg-[url('/public/assets/select_down.svg')] bg-no-repeat bg-[center_right_0.625rem]"
            >
              {nationOptions &&
                nationOptions.map((option) => {
                  return (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  )
                })}
            </select>
          </div>
          <label
            htmlFor="loginJoinMembershipPostNumber"
            className="inline-block font-bold leading-4 mb-8 mt-9"
          >
            우편번호
          </label>
          <div className="relative flex box-border border border-neutral-200 rounded items-center border-box">
            <input
              name="postNum"
              value={inputValue['postNum']}
              onChange={ChangeHandler}
              placeholder="우편번호를 검색해 주세요."
              className="px-3 w-full border-none h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            />
            <button className="absolute right-[0.625rem] whitespace-nowrap p-[0.313rem] w-[5.438rem] h-[1.563rem] text-xs border border-primary text-primary rounded font-medium">
              우편번호검색
            </button>
          </div>
        </div>
      </div>
      <NextBtn next="finish" inputValue={inputValue} disabled={alret === ''} />
    </>
  )
}

export default UserInfo
