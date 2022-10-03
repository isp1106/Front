import React, { useState } from 'react'
import { ReactComponent as Nochecked } from '/public/assets/allNotCheck.svg'
import { ReactComponent as Checked } from '/public/assets/allCheck.svg'

const Content = ({ count, onChangeHandler }) => {
  const [check, setChecked] = useState(false)
  const checkedHandler = () => {
    setChecked((prev) => !prev)
  }

  return (
    <>
      <div className="py-5 border-t border-black-200">
        <h3 className="font-bold">내용입력</h3>
        <div className="flex box-border rounded items-center border-box mt-5 mb-3">
          <input
            onChange={onChangeHandler}
            name="title"
            placeholder="제목을 입력하세요."
            className="px-3 border-none h-[2.6rem] flex-initial box-border w-full py-[0.75rem] rounded text-sm transition shadow-white"
            style={{ backgroundColor: '#F5F5F5' }}
          />
        </div>
        <div className="relative flex box-border rounded items-center border-box">
          <textarea
            onChange={onChangeHandler}
            name="content"
            placeholder="내용을 입력하세요"
            maxLength={1000}
            rows="5"
            cols="1"
            className=" w-full px-3 py-3 text-sm h-[105px] placeholder:text-sm"
            style={{ backgroundColor: '#F5F5F5' }}
          />
          <div className="absolute text-xs bottom-1 right-2">
            {count} / 1000
          </div>
        </div>
        <div
          className="flex items-center gap-2 py-4 border-b border-black-200"
          onClick={checkedHandler}
        >
          {check ? <Checked /> : <Nochecked />}
          <span className="text-sm text-black-600">이메일 받기</span>
        </div>
      </div>
    </>
  )
}

export default Content
