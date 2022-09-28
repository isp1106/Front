import React from 'react'
const CompletedReviews = ({reviewDataComplete, ratingStarReview}) => {
  return (
    <div>
      <ul className="px-5">
      {reviewDataComplete.map((review, index) => (
        <li className="py-5 border-b border-black-200" key={index}>
          <div className="flex">
            <div
              className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
              style={{ backgroundImage: 'url(https://ifh.cc/g/rvBlPp.png)' }}
            ></div>
            <div className="text-xs flex flex-col justify-center gap-2">
              <p className='font-bold'>{review.brand}</p>
              <p>{review.product_name}</p>
              <p className='text-black-600'>옵션: {review.product_option}</p>
            </div>
          </div>
          <div
            className="my-5 ratingStarReview"
            style={{
              width: ratingStarReview(review.star),
            }}
          ></div>
          <p className='text-xs'>
            퀄리티도 좋고 내구성도 좋아보여요
            <br />
            요즘 유행하는 스타일이랑도 잘 맞아서 잘 구매했다는 생각이 들어요
          </p>
          <ul className="flex gap-3 mt-5">
            <li>
              <button className='w-[3.125rem] bg-white-200 text-[#9C9C9C] rounded'>수정</button>
            </li>
            <li>
              <button className='w-[3.125rem] bg-white-200 text-[#9C9C9C] rounded'>삭제</button>
            </li>
          </ul>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default CompletedReviews
