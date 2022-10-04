import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackIcon from '../../common/BackIcon'
import Card from './Card'

const ContentBox = ({ item }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className="mb-5 px-5">
        <div className="flex items-center justify-between py-4 ">
          <p className="font-bold">{item.createdDate}</p>
          <div className="flex items-center gap-1">
            <span
              className="text-xs"
              onClick={() => navigate(`/my/qna/${item.id}`)}
            >
              답변상세보기
            </span>
            <BackIcon fill="#252525" size={14} className="rotate-180" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-4">
          <div className="text-primary font-bold">{item.answerYn}</div>
          <div className="text-sm font-bold">{item.type}</div>
          <div className="text-xs">{item.title}</div>
        </div>

        {item.product && (
          <div className="pt-4 border-t border-black-200 ">
            <Card item={item.product} />
          </div>
        )}
      </div>
      <div className="w-full h-[10px] bg-white-200 "></div>
    </>
  )
}

export default ContentBox
