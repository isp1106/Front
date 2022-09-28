import React from 'react'
import { ReactComponent as MoneyJpIcon } from '/public/assets/moneyjp_icon.svg'
import { ReactComponent as CouponIcon } from '/public/assets/coupon_icon.svg'
import { ReactComponent as SpeechBubbleIcon } from '/public/assets/speechbubble_icon.svg'
import { ReactComponent as SmileIcon } from '/public/assets/smile_icon.svg'

const MyPossession = () => {
  return (
    <ul className="flex items-center justify-center mt-10 px-5">
      <li className="w-1/4 flex flex-col items-center justify-center">
        <MoneyJpIcon className="w-5" />
        <span className="text-xs mt-4 mb-2">적립금</span>
        <span className="text-sm font-medium">500</span>
      </li>
      <li className="w-1/4 flex flex-col items-center justify-center">
        <CouponIcon className="w-5" />
        <span className="text-xs mt-4 mb-2">쿠폰</span>
        <span className="text-sm font-medium">3</span>
      </li>
      <li className="w-1/4 flex flex-col items-center justify-center">
        <SpeechBubbleIcon className="w-[1.125rem]" />
        <span className="text-xs mt-4 mb-2">후기</span>
        <span className="text-sm font-medium">2</span>
      </li>
      <li className="w-1/4 flex flex-col items-center justify-center">
        <SmileIcon className="w-5" />
        <span className="text-xs mt-4 mb-2">나의 오늘</span>
        <span className="text-sm font-medium">1</span>
      </li>
    </ul>
  )
}

export default MyPossession
