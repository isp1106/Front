import React from 'react'

const WritableReviews = () => {
  return (
    <ul className="px-5">
      <li className="flex items-center pb-[1.125rem] border-b border-black-200">
        <div
          className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
          style={{ backgroundImage: 'url(https://ifh.cc/g/rvBlPp.png)' }}
        ></div>
        <ul className='grow'>
          <li className='text-xs flex flex-col justify-center gap-2'>
            <p className='font-bold'>아쎄이</p>
            <p className=''>UNIVERSE TUBETOP</p>
            <p className='text-black-600'>옵션: FF</p>
          </li>
        </ul>
        <button className='bg-point text-white w-[5.188rem] rounded p-0.5'>리뷰 작성</button>
      </li>
    </ul>
  )
}

export default WritableReviews
