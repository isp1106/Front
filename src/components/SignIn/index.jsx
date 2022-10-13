import { useState, useMemo } from 'react'
import GoogleBtn from './GoogleBtn'
// import { ReactComponent as GooGleIcon } from '/public/assets/google.svg'
import { ReactComponent as LineIcon } from '/public/assets/line.svg'
import Input from './input'
import Button from '../common/Button'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()
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

  const clear = (name) => {
    setInputValue({
      ...inputValue,
      [name]: '',
    })
  }

  const invalidInput = useMemo(
    () => inputValue.id.trim() !== '' && inputValue.pw.trim() !== '',
  )

  const loginHandler = () => {
    if (invalidInput) {
      //api연결 후 api 요청 로직 작성
      console.log(inputValue)
    } else {
      alert('아이디와 패스워드를 확인해주세요')
    }
  }

  return (
    <>
      <div className="px-5 pb-10">
        <h2 className="text-[30px] font-bold">내 손안의 매거진</h2>
        <h3 className="text-black-800 mb-[34px]">오늘의 상점에서 만나보세요</h3>
        <Input
          state="아이디"
          name="id"
          onChangeHandler={onChangeHandler}
          clear={() => clear('id')}
          value={inputValue.id}
        />
        <Input
          state="비밀번호"
          name="pw"
          onChangeHandler={onChangeHandler}
          clear={() => clear('pw')}
          value={inputValue.pw}
        />
        <Button
          classprop="bg-primary text-white"
          disabled={!invalidInput}
          onClick={loginHandler}
        >
          로그인하기
        </Button>
        <div className="flex justify-end mt-5 font-medium">
          <span
            className="text-xs text-black-400 cursor-pointer pr-3 pl-3 border-r "
            onClick={() => navigate('findIdPw', { state: '아이디 찾기' })}
          >
            아이디 찾기
          </span>
          <span
            className="text-xs text-black-400 cursor-pointer pl-3"
            onClick={() => navigate('findIDPw', { state: '비밀번호 찾기' })}
          >
            비밀번호 찾기
          </span>
        </div>
        <GoogleBtn />
        <Button classprop="justify-between text-white mt-5 gap-2 bg-black-400">
          <Link to="/order-check" className="w-full block h-full py-3">
            비회원 주문 조회
          </Link>
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
