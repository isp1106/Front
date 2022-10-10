import React from 'react'
import { useParams } from 'react-router-dom'
import { likedList } from '~/dummy/liked'
import Card from '../../components/CardList/Card'

function NoResult() {
  const { search } = useParams()

  return (
    <div>
      <div className="w-fit mx-auto py-5 mb-12 text-center text-sm font-bold text-black-800">
        <span className="text-primary">"{search}"</span>에 대한 검색 결과가
        없습니다 <br />
        검색어를 다시 한번 확인해보세요
      </div>
      <div className="pb-6 border-b-[10px] border-white-200">
        <div className="font-bold p-5">구매한 상품</div>
        <div className="px-4 flex overflow-x-auto">
          {likedList.map((item) => (
            <div key={item.id} className="w-28 mx-1 shrink-0">
              <Card data={item} purchase={true} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold p-5">최근 본 상품</div>
        <div className="px-4 flex overflow-x-auto pb-7">
          {likedList.map((item) => (
            <div key={item.id} className="w-28 mx-1 shrink-0">
              <Card data={item} purchase={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoResult
