import React from 'react'

const MemberInfo = () => {
  return (
    <div className="px-5 text-sm">
      <div className="mt-5">
        <div className="inline-block font-bold leading-4 mb-5">주소</div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          150-0041
        </div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          Tōkyō-to, Shibuya-ku, Jinnan,
        </div>
        <div className="mb-5 px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center">
          1 Chome−20−9 公園通りビル
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">이름</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            사토
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            유키
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">후리가나</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            佐藤
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            ゆき
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="inline-block font-bold leading-4 mb-5">전화번호</div>
        <div className="flex gap-[13px]">
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            Japan(+81)
          </div>
          <div className="flex-grow px-[10px] h-[3rem] flex box-border border border-neutral-200 rounded items-center text-sm">
            1234-12-1234
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberInfo
