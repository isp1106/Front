import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLink from '../layout/Header/HeaderLink'

export const Category = () => {
  const category = {
    like: '상품',
    'liked-brand': '브랜드',
    'liked-magazine': '매거진',
    'liked-oneul': '오늘',
    'recent-view': '최근 본',
  }
  const [active, setActive] = useState('상품')
  const navigate = useNavigate()
  return (
    <div className="fixed w-full max-w-[600px] z-10 overflow-hidden bg-white">
      <div className="flex justify-between items-center mx-5 h-16">
        <div className="text-xl font-bold">
          {active === '최근 본' ? '최근 본 상품' : '찜'}
        </div>
        <HeaderLink />
      </div>
      <div className="flex h-[50px] justify-evenly items-center border-black border-b text-xl text-black-400">
        {Object.entries(category).map(([k, v]) => (
          <div
            key={k}
            onClick={() => {
              setActive(v)
              navigate(`/${k}`)
            }}
            className={
              active === v
                ? 'relative font-bold text-black-100 after:border-b-[3px] after:border-black after:absolute after:-bottom-3 after:w-full after:left-0 hover:cursor-pointer'
                : null
            }
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
