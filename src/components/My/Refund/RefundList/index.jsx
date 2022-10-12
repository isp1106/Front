import React from 'react'
import { useGetRefundItemsQuery } from '../../../../store/api/refundApiSlice'
import RefundListCard from './RefundListCard'
import Header from '../../../layout/Header'
import ErrorCom from '../../../common/ErrorCom'
import Loading from '../../../layout/Loading'

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
      {isLoading && <Loading />}
      {isError && (
        <div>
          <ErrorCom />
        </div>
      )}
      {RefundList && (
        <div className="overflow-hidden">
          <Header fill="#000">
            <div className="text-center">취소/교환/환불내역</div>
          </Header>
          <div className="pt-[54px] overflow-y-scroll">
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
