import React from 'react'
import WritalbleReviews from './WritableReviews'
import CompletedReviews from './CompletedReviews'
const TabContent = ({tab}) => {
  return (
    <div className='mt-5'>
      {
        tab === 0 ? <WritalbleReviews /> : <CompletedReviews />
      }
    </div>
  )
}

export default TabContent