import React from 'react'
import { Link } from 'react-router-dom'
const MyNav = () => {
  return (
    <div className="relative font-medium mt-14 px-5 pt-11 before:content-[attr(before)] before:w-full before:h-2.5 before:bg-white-200 before:absolute before:left-0 before:top-0">
      <h2 className="text-sm text-black-200 mb-1.5">주문정보</h2>
      <ul className="flex flex-wrap">
        <li className="text-sm w-1/2 py-1">
          <Link to="order-list" className="font-medium">
            주문/배송/픽업 조회
          </Link>
          {/* Temporary link */}
        </li>
        <li className="text-sm w-1/2 py-1">
          <Link to="refund-list" className="font-medium">
            취소/교환/환불 내역
          </Link>
        </li>
      </ul>
      <h2 className="text-sm text-black-200 mt-9 mb-1.5">고객센터</h2>
      <ul className="flex flex-wrap">
        <li className="text-sm w-1/2 py-1">
          <Link to="/my/qna" className="font-medium">
            1:1 문의
          </Link>
        </li>
        <li className="text-sm w-1/2 py-1">
          <Link to="/faq" className="font-medium">
            FAQ
          </Link>
        </li>
        <li className="text-sm w-1/2 py-1">
          <Link to="/notice" className="font-medium">
            공지사항
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MyNav
