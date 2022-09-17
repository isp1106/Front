import React from 'react'
import Button from '../../components/common/Button'
import Title from '../../components/SignUp/Title'
import NextBtn from '../../components/SignUp/NextBtn'
const SignUpIdForm = () => {
  return (
    <>
      <div className="pr-5 pl-5">
        <Title text="아이디" />
      </div>
      <div className="mt-36">
        <label
          htmlFor="loginJoinMembershipId"
          className="inline-block mt-4 mb-2 leading-snug"
        >
          아이디
          <span className="inline-block overflow-hidden w-[4px] h-[4px] mt-[4px] rounded-full bg-red-600 indent-[999px] align-text-top ml-1">
            필수 입력
          </span>
        </label>
        <div className="flex box-border h-[50px] border border-neutral-200 rounded justify-between items-center">
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
        <p className="login-input__validation">{/* 오류내용 */}</p>
        <Button classprop=" border border-black-100 mt-6 gap-2">
          중복확인
        </Button>
      </div>
      <NextBtn next="pwform" />
    </>
  )
}

export default SignUpIdForm
