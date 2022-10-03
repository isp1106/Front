import React from 'react'

const Answer = ({ item }) => {
  const answers = item?.answer?.split('.')
  return (
    <>
      <div className="w-full h-[10px] bg-white-200 mb-5"></div>
      <div className="px-5">
        <div className="mb-5 text-xl font-bold">A</div>
        <div className="text-xs">
          {answers.map((item, idx) => (
            <p key={idx} className="leading-normal">
              {item}
              {answers.length - 1 !== idx && <span>.</span>}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default Answer
