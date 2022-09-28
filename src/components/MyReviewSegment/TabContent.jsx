import React from 'react'
import WritalbleReviews from './WritableReviews'
import CompletedReviews from './CompletedReviews'
const TabContent = ({tab, reviewData, reviewDataComplete, ratingStarReview}) => {
  return (
    <div>
      {
        tab === 0 ? <WritalbleReviews reviewData={reviewData} /> : <CompletedReviews reviewDataComplete={reviewDataComplete} ratingStarReview={ratingStarReview} />
      }
    </div>
  )
}

export default TabContent