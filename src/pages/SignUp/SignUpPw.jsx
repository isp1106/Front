import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as ClearIcon } from '/public/assets/clear.svg'
import { ReactComponent as ViewIcon } from '/public/assets/view.svg'
import NextBtn from '../../components/SignUp/NextBtn'
import Title from '../../components/SignUp/Title'
import useInputValue from '../../hook/useInputValue'

const SignUpPw = () => {
  const { state } = useLocation()
  const [type, setType] = useState('password')
  const [inputValue, setInputValue] = useState({
    id: state,
    pw: '',
    pwCheck: '',
  })
  const onBlurHandler = (name) => {
    setActive(false)
    setInputValue({
      ...inputValue,
      [name]: '',
    })
  }
  const ChangeHandler = useCallback((e) => {
    const { name, value } = e.target
    name === 'id'
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  })

  const [active, setActive, onFocusHandler] = useInputValue()
  const changeTypeHandler = () => {
    type === 'password' ? setType('text') : setType('password')
  }

  return (
    <>
      <Title title="비밀번호" text="생성" />
      <div className="mt-36">
        <label
          htmlFor="loginJoinMembershipId"
          className="inline-block mt-4 mb-2 leading-snug"
        >
          비밀번호
          <span className="inline-block overflow-hidden w-[4px] h-[4px] mt-[4px] rounded-full bg-red-600 indent-[999px] align-text-top ml-1">
            필수 입력
          </span>
        </label>
        <div className="relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            value={inputValue['pw']}
            onChange={ChangeHandler}
            onFocus={onFocusHandler}
            name="pw"
            type={type}
            placeholder="6자 이상의 영문, 숫자로 입력해 주세요."
            maxLength="11"
            minLength="6"
            className="pl-3 w-full border-none h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
          />

          <div className="absolute flex gap-1 right-2">
            {active && (
              <ClearIcon
                width="20px"
                onClick={() => onBlurHandler(`${name}`)}
              />
            )}
            <ViewIcon width="26px" onClick={changeTypeHandler} />
          </div>
        </div>
        <div className="mt-2 relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            value={inputValue['pwCheck']}
            onChange={ChangeHandler}
            onFocus={onFocusHandler}
            type={type}
            name="pwCheck"
            placeholder="비밀번호를 재입력해주세요."
            maxLength="11"
            minLength="6"
            className="pl-3 w-full border-none h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
          />

          <div className="absolute flex gap-1 right-2">
            {active && (
              <ClearIcon
                width="20px"
                onClick={() => onBlurHandler('pwCheck')}
              />
            )}
            <ViewIcon width="26px" onClick={changeTypeHandler} />
          </div>
        </div>

        <p className="mt-[8px] font-[11px] text-red-600">
          dkdkdkdk{/* 오류내용 */}
        </p>
      </div>
      <NextBtn next="infoform" inputValue={inputValue} />
    </>
  )
}

export default SignUpPw
