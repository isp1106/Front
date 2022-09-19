import { useState } from 'react'
export const ID_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')
export const PW_REGEX = new RegExp('^[a-z0-9_-]{5,20}$')

const useInputValue = (initialState = false) => {
  const [active, setActive] = useState(false)

  const onFocusHandler = (e) => {
    setActive(true)
  }

  return [active, setActive, onFocusHandler]
}

export default useInputValue
