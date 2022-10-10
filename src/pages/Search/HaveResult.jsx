import React from 'react'
import Container from '../../components/CardList/Container'
import product from '~/dummy/dummy/product.json'

function HaveResult() {
  return (
    <div>
      <div className="pb-5 mx-5 border-b border-black-200">
        총 <span>{4}개</span>의 검색결과
      </div>
      <div>
        <div className="p-5">상품</div>
        <Container list={product} />
      </div>
    </div>
  )
}

export default HaveResult
