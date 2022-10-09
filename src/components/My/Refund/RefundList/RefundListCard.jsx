import React from 'react'
import MyCardHeader from '../../MyCardHeader'

const RefundListCard = ({ item }) => {
  return (
    <>
      <div className="px-5 mt-4">
        <MyCardHeader
          createdAt={item.completionDate}
          requests={item.requests}
          navigateId={item.id}
        />
      </div>
      <div className="w-full h-[10px] bg-white-200 mt-4"></div>
    </>
  )
}

export default RefundListCard
