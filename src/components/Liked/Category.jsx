import React from 'react'
import { useState } from 'react'
import HeaderLink from '../layout/Header/HeaderLink'

export const Category = () => {
  const category = ['상품', '브랜드', '매거진', '오늘', '최근 본']
  const [active, setActive] = useState('상품')
  return (
    <div className="fixed w-full max-w-[600px] z-10 overflow-hidden bg-white">
      <div className="flex justify-between items-center mx-5 h-16">
        <div className="text-xl font-bold">찜</div>
        <HeaderLink />
      </div>
      <div className="flex h-[50px] justify-evenly items-center border-black border-b text-xl text-black-400">
        {category.map((c) => (
          <div
            key={c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? 'relative font-bold text-black-100 after:border-b-[3px] after:border-black after:absolute after:-bottom-3 after:w-full after:left-0 hover:cursor-pointer'
                : null
            }
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
