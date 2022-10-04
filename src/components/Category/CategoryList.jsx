import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CATEGORY } from '~/dummy/constantsfix'
import { cls } from '../../utils'
import SelectFilter from './SelectFilter'

function CategoryList() {
  const [selectTop, setSelectTop] = useState('패션')
  const [selectSub, setSelectSub] = useState('의류')
  const [selectLast, setSelectLast] = useState('전체')
  const [subCategoryList, setSubCategoryList] = useState([])
  const [lastCategoryList, setLastSubCategoryList] = useState([])

  // 랜더링과 동시에 코트매틱 category에서 '브랜드' 리스트 삭제 (한번만 실행)
  useEffect(() => {
    CATEGORY.map((top) => {
      if (top.TopCategory === '코스매틱') {
        top.subCategory.map((sub) => {
          if (sub.name === '브랜드') {
            top.subCategory.shift()
          }
        })
      }
    })
  }, [])

  // topCategory가 바뀌면 디폴트로 subCategory의 첫번째 요소 name이 active 상태가 되도록
  useEffect(() => {
    CATEGORY.map((top) => {
      if (selectTop === top.TopCategory) {
        setSubCategoryList(top.subCategory)
        setSelectSub(top.subCategory[0].name)
      }
    })
  }, [selectTop])

  // sub카테고리가 바뀔때 last카테고리의 디폴트를 '전체'로
  useEffect(() => {
    setSelectLast('전체')
  }, [selectSub])

  // 패션 카테고리만 성별에 따라 바뀌므로
  useEffect(() => {
    subCategoryList.map((sub) => {
      if (selectSub === sub.name) {
        if (selectTop === '패션') {
          setLastSubCategoryList(sub.list.women)
        } else {
          setLastSubCategoryList(sub.list)
        }
      }
    })
  }, [selectSub, subCategoryList])

  return (
    <div className="fixed top-0 w-full max-w-[600px] overflow-hidden bg-white z-50">
      <div className="flex overflow-x-auto">
        {CATEGORY.map((top) => (
          <div
            key={top.TopCategory}
            onClick={() => setSelectTop(top.TopCategory)}
          >
            {top.TopCategory} /
          </div>
        ))}
      </div>
      <div className="px-5 flex overflow-x-auto h-[50px] items-center border-black border-b text-xl text-black-400">
        {subCategoryList &&
          subCategoryList.map((sub) => (
            <div
              key={sub.name}
              className={cls(
                'mr-5 last:mr-0 whitespace-nowrap delay-100 duration-200 after:duration-100 after:delay-200',
                selectSub === sub.name &&
                  'relative font-bold text-black-100 after:border-b-[3px] after:border-black after:absolute after:-bottom-3 after:w-full after:left-0 hover:cursor-pointer',
              )}
              onClick={() => setSelectSub(sub.name)}
            >
              {sub.name}
            </div>
          ))}
      </div>
      <div className="px-5 flex overflow-x-auto h-12 items-center border-b border-primary">
        {lastCategoryList &&
          lastCategoryList.map((last) => (
            <div
              key={last}
              className={cls(
                'mr-7 last:mr-0 whitespace-nowrap text-xs delay-100 duration-200',
                selectLast === last && 'text-primary',
              )}
              onClick={() => setSelectLast(last)}
            >
              {last}
            </div>
          ))}
      </div>
      <SelectFilter />
    </div>
  )
}

export default CategoryList
