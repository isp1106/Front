import React from 'react'
import Container from '~/components/CardList/Container'
import { useGetSimpleProductsQuery } from '../../store/api/productSlice'
import Loading from '../layout/Loading'
import Category from './Category'
import NotFoundPage from '~/pages/NotFoundPage'

function RecentView() {
  const recentViewProduct = 'recentViewProduct'
  const recentViews = JSON.parse(localStorage.getItem(recentViewProduct))
  // API요청 보낼 query string 연결
  const queryString = recentViews.map((id) => `productId=${id}`).join('&')
  const {
    data: recentList,
    isLoading,
    isError,
  } = useGetSimpleProductsQuery(queryString)
  console.log(recentList)
  const local = JSON.parse(localStorage.getItem(recentViewProduct))
  return (
    <div>
      <Category />
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div className="pt-20">
          <NotFoundPage />
        </div>
      ) : (
        <Container list={recentList} pt={'pt-36'} />
      )}
    </div>
  )
}

export default RecentView