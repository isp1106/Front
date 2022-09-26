import React from 'react'
import { useState } from 'react'

export const Category = () => {
  const category = ['상품', '브랜드', '매거진', '오늘', '최근 본']
  const [active, setActive] = useState('상품')
  return (
    <div>
      <div className="flex w-full h-[50px] justify-evenly items-center border-black border-b">
        {category.map((c) => (
          <div
            key={c}
            onClick={() => setActive(c)}
            className={
              active === c
                ? 'relative after:border-b after:boder-2 after:border-black after:absolute after:-bottom-3 after:w-full'
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
