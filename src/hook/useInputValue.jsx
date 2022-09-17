import { useCallback, useState } from 'react'
export const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
export const PW_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')

const ERROR_MSG = {
  required: '필수 정보입니다.',
  inValidId: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  inValidPw: '8~16 영문 대 소문자, 숫자를 사용하세요',
  inValidConfirmPw: '비밀번호가 일치하지 않습니다.',
}

const useInputValue = (initialState = false) => {
  const [active, setActive] = useState(false)
  const [alret, setAlret] = useState('')

  const onFocusHandler = (e) => {
    setActive(true)
  }

  return [active, setActive, onFocusHandler]
}

export default useInputValue
