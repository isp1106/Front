import React, { useState } from 'react'
import { ReactComponent as ClearIcon } from '/public/assets/clear.svg'
import { ReactComponent as ViewIcon } from '/public/assets/view.svg'

const Input = ({ text, type, changeTypeHandler, name }) => {
  const [active, setActive] = useState(false)
  const [inputyValue, setInputValue] = useState({
    id: '',
    pw: '',
    pwCheck: '',
  })
  const onFocusHandler = (e) => {
    setActive(true)
  }

  const onBlurHandler = (name) => {
    setActive(false)
    setInputValue({
      ...inputyValue,
      [name]: '',
    })
  }

  const ChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputyValue,
      [name]: value,
    })
    console.log(inputyValue)
  }
  return (
    <>
      <label
        htmlFor="loginJoinMembershipId"
        className="inline-block mt-4 mb-2 leading-snug"
      >
        {text}
        <span className="inline-block overflow-hidden w-[4px] h-[4px] mt-[4px] rounded-full bg-red-600 indent-[999px] align-text-top ml-1">
          필수 입력
        </span>
      </label>
      <div className="relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
        <input
          value={inputyValue.pw}
          onChange={ChangeHandler}
          onFocus={onFocusHandler}
          name={name}
          type={type}
          placeholder="6자 이상의 영문, 숫자로 입력해 주세요."
          maxLength="11"
          minLength="6"
          className="pl-3 w-full border-none h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
        />

        <div className="absolute flex gap-1 right-2">
          {active && (
            <ClearIcon width="20px" onClick={() => onBlurHandler(`${name}`)} />
          )}
          {text === '비밀번호' && (
            <ViewIcon width="26px" onClick={changeTypeHandler} />
          )}
        </div>
      </div>
      {text == '비밀번호' && (
        <div className="mt-2 relative  flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            value={inputyValue.pwCheck}
            onChange={ChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
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
                onClick={() => onBlurHandler(`${name}Check`)}
              />
            )}
            {text === '비밀번호' && (
              <ViewIcon width="26px" onClick={changeTypeHandler} />
            )}
          </div>
        </div>
      )}
      <p className="mt-[8px] font-[11px] text-red-600">
        dkdkdkdk{/* 오류내용 */}
      </p>
    </>
  )
}

export default Input
