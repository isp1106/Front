import React from 'react'
import { cls } from '../../utils'
import { useState } from 'react'
const Process = () => {
  const [active, setActive] = useState(0)
  return (
    <ul
      className="relative flex items-center justify-center text-center gap-5 mt-10 px-5
   before:content-[attr(before)] before:absolute before:w-full before:h-[2px] before:bg-primary before:top-[45%]"
    >
      <li
        className={cls(
          'relative z-1 bg-white flex flex-col gap-3 border w-1/3 h-[6.125rem] items-center justify-center rounded shadow-[0_4px_2px_1px_rgba(85,85,85,0.15)]',
          active === 0 ? 'border-primary' : 'border-black-200'
        )}
      >
        <span className="text-2xl font-medium leading-none">0</span>
        <span className="text-xs">
          입금
          <br />
          결제
        </span>
      </li>
      <li
        className={cls(
          'relative z-1 bg-white flex flex-col gap-3 border w-1/3 h-[6.125rem] items-center justify-center rounded shadow-[0_4px_2px_1px_rgba(85,85,85,0.15)]',
          active === 1 ? 'border-primary' : 'border-black-200'
          )}
      >
        <span className="text-2xl font-medium leading-none">1</span>
        <span className="text-xs">
          배송 중<br />
          픽업 대기
        </span>
      </li>
      <li
        active={true}
        className={cls(
          'relative z-1 bg-white flex flex-col gap-3 border w-1/3 h-[6.125rem] items-center justify-center rounded shadow-[0_4px_2px_1px_rgba(85,85,85,0.15)]',
          active === 2 ? 'border-primary' : 'border-black-200'
        )}
      >
        <span className="text-2xl font-medium leading-none">0</span>
        <span className="text-xs">
          배송완료 <br />
          픽업 완료
        </span>
      </li>
    </ul>
  )
}

export default Process
