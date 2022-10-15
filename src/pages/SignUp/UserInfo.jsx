import React, { useState, useCallback } from 'react'
import { useEffect } from 'react'
import DaumPostcodeEmbed from 'react-daum-postcode'
import { useLocation } from 'react-router-dom'
import NextBtn from '../../components/common/NextBtn'
import Title from '../../components/SignUp/Title'
import '~/animate.css'
const EMAIL_REGEX =
  /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

const UserInfo = () => {
  const { state, pathname } = useLocation()

  const [inputValue, setInputValue] = useState({
    ...state,
    email: '',
    firstName: '',
    lastName: '',
    firstNameRuby: '',
    lastNameRuby: '',
    telNum: '',
    postNum: '',
    address: '',
    detail: '',
  })
  const [disabled, setDisabled] = useState(false)
  const [openPost, setOpenPost] = useState(false)
  const [animation, setAnimation] = useState('')

  const onClick = () => {
    //여기 너 회원가입 로직
    console.log('회원가입 했다!')
  }

  const ChangeHandler = useCallback((e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  })

  const onOpenHandler = () => {
    setOpenPost(true)
    setAnimation('openPost')
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setAnimation('')
    }, 1000)
  }

  const onCloseHandler = () => {
    setAnimation('closePost')
    document.body.style.overflow = 'auto'
    setTimeout(() => {
      setOpenPost(false)
      setAnimation('')
    }, 1000)
  }

  const onCompleteHandler = (data) => {
    setInputValue({
      ...inputValue,
      postNum: data.zonecode,
      address: data.roadAddress,
    })
    onCloseHandler()
  }

  const [alret, setAlret] = useState({
    email: null,
    lastName: null,
    firstNameRuby: null,
    lastNameRuby: null,
    telNum: null,
    postNum: null,
    address: null,
    detail: null,
  })

  const checkRegex = (inputId) => {
    if (inputId === 'email') {
      EMAIL_REGEX.test(inputValue.email)
        ? setAlret({
            ...alert,
            email: '',
          })
        : setAlret({
            ...alret,
            email: '올바르지 않은 이메일입니다.',
          })
    } else {
      setAlret({
        ...alret,
        [inputId]: '필수 입력값입니다.',
      })
    }
  }

  useEffect(() => {
    inputValue.email !== '' &&
      inputValue.lastName !== '' &&
      inputValue.firstNameRuby !== '' &&
      inputValue.telNum !== '' &&
      inputValue.postNum !== '' &&
      setDisabled(true)
  }, [alret])

  const telOptions = ['Japan(+81)', 'Korea(+82)']
  const nationOptions = ['Japan(JP/JPN)', 'Korea(KR/KOR)']
  return (
    <div>
      <div className="info px-5">
        {pathname.includes('/signup') && (
          <>
            <Title title="정보" text="입력" />
            <label
              htmlFor="loginJoinMembershipEmail"
              className="mt-[77px] inline-block font-bold leading-4 mb-8"
            >
              이메일
            </label>
            <div className="relative flex box-border border border-neutral-200 rounded items-center border-box">
              <input
                value={inputValue['email']}
                onChange={ChangeHandler}
                onBlur={() => checkRegex('email')}
                name="email"
                placeholder="이메일을 입력해주세요."
                className="px-3 border-none h-[3rem] flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
              />
              <button className="absolute right-[0.625rem] w-[5.438rem] h-[1.563rem] text-xs border border-primary text-primary rounded font-medium">
                중복확인
              </button>
            </div>
            <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
              {alret.email}
            </p>
          </>
        )}
        <div>
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
              onBlur={() => checkRegex('firstName')}
              placeholder="성"
              className="pl-3 w-full h-[3rem] flex-initial box-border w- py-[0.75rem] text-[0.875rem] transition shadow-white border border-neutral-200 rounded mr-[0.813rem]"
            />
            <input
              name="lastName"
              value={inputValue['lastName']}
              onBlur={() => checkRegex('lastName')}
              onChange={ChangeHandler}
              placeholder="이름"
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
            {alert.firstName} {alert.lastName}
          </p>
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
              onBlur={() => checkRegex('firstNameRuby')}
              placeholder="성"
              className="pl-3 w-full h-[3rem] flex-initial box-border w- py-[0.75rem] text-[0.875rem] transition shadow-white border border-neutral-200 rounded mr-[0.813rem]"
            />
            <input
              name="lastNameRuby"
              value={inputValue['lastNameRuby']}
              onBlur={() => checkRegex('lastNameRuby')}
              onChange={ChangeHandler}
              placeholder="이름"
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
            {alert.firstNameRuby} {alert.lastNameRuby}
          </p>

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
              className="text-black-400 p-[0.625rem] pr-[1.5rem] h-[3rem] flex-initial box-border text-[0.875rem] transition shadow-white border border-neutral-200 rounded bg-[url('/public/assets/select_down.svg')] bg-no-repeat bg-[center_right_0.625rem]"
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
              onBlur={() => checkRegex('telNum')}
              className="pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] text-[0.875rem] transition shadow-white border border-neutral-200 rounded"
            />
          </div>
          <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
            {alert.telNum}
          </p>

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
              className="text-black-400 pl-3 w-full h-[3rem] flex-initial box-border py-[0.75rem] rounded text-[0.875rem] transition shadow-white border border-neutral-200 bg-[url('/public/assets/select_down.svg')] bg-no-repeat bg-[center_right_0.625rem]"
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
            주소
          </label>
          <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
            <input
              name="postNum"
              value={inputValue['postNum']}
              onChange={ChangeHandler}
              onBlur={() => checkRegex('postNum')}
              placeholder="우편번호를 검색해 주세요."
              className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            />
            <button
              className="absolute right-[0.625rem] whitespace-nowrap p-[0.313rem] w-[5.438rem] h-[1.563rem] text-xs border border-primary text-primary rounded font-medium align-middle"
              onClick={onOpenHandler}
            >
              우편번호검색
            </button>
            {openPost && (
              <div
                className={`${animation} w-full h-full fixed z-50 top-0 left-0 bg-white flex flex-col items-center`}
              >
                <div className="w-full h-20 py-5 font-bold text-lg flex items-center justify-center relative">
                  <div>주소 찾기</div>
                  <div className="absolute right-5" onClick={onCloseHandler}>
                    <div className="relative w-6 h-6 inset-y-0 flex justify-center items-center">
                      <div className="w-6 h-0.5 bg-black origin-center rotate-45 absolute"></div>
                      <div className="w-6 h-0.5 bg-black origin-center -rotate-45 "></div>
                    </div>
                  </div>
                </div>
                <DaumPostcodeEmbed
                  style={{ height: '100%' }}
                  onComplete={onCompleteHandler}
                  onClose={onCloseHandler}
                />
              </div>
            )}
          </div>
          <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">
            {alert.postNum}
          </p>
          <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
            <input
              name="address"
              value={inputValue['address']}
              onChange={ChangeHandler}
              onBlur={() => checkRegex('address')}
              placeholder="주소를 입력 해 주세요."
              className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            />
          </div>

          <div className="mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
            <input
              name="detail"
              value={inputValue['detail']}
              onChange={ChangeHandler}
              onBlur={() => checkRegex('detail')}
              placeholder="상세 주소를 입력 해 주세요."
              className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            />
          </div>
        </div>
      </div>

      {pathname.includes('/signup') && (
        <NextBtn
          onClick={onClick}
          next="finish"
          inputValue={inputValue}
          disabled={disabled}
        >
          다음
        </NextBtn>
      )}
    </div>
  )
}

export default UserInfo
