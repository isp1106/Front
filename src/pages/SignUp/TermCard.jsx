import React, { useRef } from 'react'
import notChecked from '/public/assets/notChecked.svg'
import checked from '/public/assets/checked.svg'
import { useEffect } from 'react'
import { useState } from 'react'

export const TermCard = ({ accept, check, setCheck }) => {
  const { title, essential, terms } = accept
  const setTerms = useRef(null)
  useEffect(() => {
    setTerms.current.innerText = terms
  }, [terms])

  useEffect(() => {
    setCheck(check)
    console.log(check)
  }, [check])

  return (
    <div>
      <div className="flex text-sm justify-between mb-5">
        <div
          className="flex hover:cursor-pointer"
          onClick={() => setCheck(!check)}
        >
          <div className="w-3.5 m-[5px]">
            <img src={check ? checked : notChecked} alt="check"></img>
          </div>
          <div className="text-sm font-normal text-black-800 ml-2.5">
            [{essential ? '필수' : '선택'}] {title}
          </div>
        </div>
        <div className="hover:cursor-pointer border-b border-black">
          전체보기
        </div>
      </div>
      <div className="w-full h-[120px] min-w-[240px] border border-black-200 rounded-[5px] overflow-y-auto">
        <div ref={setTerms} className="mx-5 my-3.5 text-sm">
          {terms}
        </div>
      </div>
    </div>
  )
}
