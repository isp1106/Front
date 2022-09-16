import { useState } from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back.svg'
import { ReactComponent as GooGleIcon } from '/public/assets/google.svg'
import { ReactComponent as LineIcon } from '/public/assets/line.svg'
import Input from './input'
import Button from './Button'

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  console.log(inputValue)
  return (
    <>
      <div className="pt-3 pb-3 pl-3">
        <GoBackIcon />
      </div>
      <div className="pr-5 pl-5">
        <h2 className="text-[30px] font-bold">내 손안의 매거진</h2>
        <h3 className="text-black-800">오늘의 상점에서 만나보세요</h3>
        <Input state="아이디" name="id" onChangeHandler={onChangeHandler} />
        <Input state="비밀번호" name="pw" onChangeHandler={onChangeHandler} />
        <Button classprop="bg-primary text-white">로그인하기</Button>
        <div className="flex justify-end mt-5 font-medium">
          <span className="text-xs text-black-400 cursor-pointer  pr-[12px] pl-[12px] border-r ">
            아이디 찾기
          </span>
          <span className="text-xs text-black-400 cursor-pointer pl-[12px]">
            비밀번호 찾기
          </span>
        </div>
        <Button classprop="justify-between border border-black-100 mt-6 gap-2">
          <GooGleIcon className="ml-3" />
          <span>Googleでログイン</span>
          <GooGleIcon className="mr-3 opacity-0" />
        </Button>
        <Button classprop="justify-between border text-white border-[#60C545] mt-6 gap-2 bg-[#60C545]">
          <LineIcon className="ml-3" />
          <span>LINEでログイン</span>
          <LineIcon className="mr-3 opacity-0" />
        </Button>
        <p className="font-bold text-xs text-center mt-9">
          회원 가입하고 <strong className="text-primary">500¥</strong> 적립금을
          받으세요!
        </p>
        <Button classprop="mt-3 border border-black-100">회원가입 하기</Button>
      </div>
    </>
  )
}

export default SignIn
