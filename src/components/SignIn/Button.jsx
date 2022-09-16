import React from 'react'
import { cls } from '../../utils'

const Button = ({ text, classprop, children }) => {
  return (
    <div
      className={cls(
        'font-bold rounded text-xs cursor-pointer  text-center h-[44px] flex items-center justify-center text-center',
        classprop && `${classprop}`,
      )}
    >
      {children}
    </div>
  )
}

export default Button
