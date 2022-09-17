import React from 'react'
import NextBtn from '../../components/SignUp/NextBtn'
import Title from '../../components/SignUp/Title'
import Button from '../../components/common/Button'
const SignUpPw = () => {
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
        <div className="flex flex-col mb-2 box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            type="text"
            id="loginJoinMembershipId"
            placeholder="6자 이상의 영문, 숫자로 입력해 주세요."
            maxLength="11"
            minLength="6"
            className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
          />
          <button type="button" className="login-input__button-clear indent-96">
            {/* svg */}
          </button>
        </div>
        <div className="flex flex-col mb-2 box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
          <input
            type="text"
            id="loginJoinMembershipId"
            placeholder="비밀번호 확인을 입력해주세요"
            maxLength="11"
            minLength="6"
            className="pl-3 h-[48px] border-none flex-initial box-border w-full py-[12px] rounded text-[14px] transition shadow-white"
          />
          <button type="button" className="login-input__button-clear indent-96">
            {/* svg */}
          </button>
        </div>
        <p className="login-input__validation">{/* 오류내용 */}</p>
      </div>
      <NextBtn next="infoform" />
    </>
  )
}

export default SignUpPw
