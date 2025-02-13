import React, { useState } from 'react'
import NextBtn from '../common/NextBtn'
import Modal from '../common/Modal'

const Email = ({ onChange, alret }) => {
  return (
    <>
      <div>
        <label htmlFor="email">이메일</label>
        <div className="mt-4 mb-3 relative flex box-border border border-neutral-200 rounded items-center border-box">
          <input
            name="email"
            placeholder="이메일을 입력 해 주세요."
            className="px-3 h-[3rem] border-none flex-initial box-border w-full py-[0.75rem] rounded text-[0.875rem] transition shadow-white"
            onChange={onChange}
          />
        </div>
        <p className="mt-[8px] font-[11px] text-red-600 text-[12px]">{alret}</p>
      </div>
    </>
  )
}

export default Email
