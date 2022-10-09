import React from 'react'
import { useGetRefundItemsQuery } from '../../../../store/api/refundApiSlice'
import RefundListCard from './RefundListCard'
import Loader from '../../../layout/Loader'
import Header from '../../../layout/Header'

const RefundList = () => {
  const {
    data: RefundList,
    isLoading,
    isError,
    isSuccess,
  } = useGetRefundItemsQuery()
  console.log(RefundList)
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <div>{isError}</div>}
      {RefundList && (
        <div className="">
          <Header>취소/교환/환불내역</Header>
          <div className="pt-[54px] text-center">
            {RefundList.map((item) => {
              return <RefundListCard item={item} key={item.id} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default RefundList
