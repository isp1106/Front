import React from 'react'
import { useState } from 'react'
import { cls } from '../../utils'

function Capsule({ gender, setGender }) {
  const [active, setActive] = useState(gender)
  const list = { women: '우먼', men: '맨' }
  return (
    <div className="fixed bottom-20 right-5">
      <div className="flex flex-col text-xs font-bold justify-center items-center rounded-md box-border overflow-hidden">
        <button
          value={'women'}
          onClick={() => {
            setGender('women')
            setActive('women')
          }}
          className={cls(
            'w-10 h-10 border-t border-x border-black rounded-t-md',
            active === 'women'
              ? 'bg-black text-white'
              : 'bg-white text-black-600',
          )}
        >
          우먼
        </button>
        <button
          value={'men'}
          onClick={() => {
            setGender('men')
            setActive('men')
          }}
          className={cls(
            'w-10 h-10 border-b border-x border-black rounded-b-md',
            active === 'men'
              ? 'bg-black text-white'
              : 'bg-white text-black-600',
          )}
        >
          맨
        </button>
      </div>
    </div>
  )
}

export default Capsule
