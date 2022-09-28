import React from 'react'
import { useState } from 'react'
import { cls } from '../../utils'
import Header from './Header'
import TabList from './TabList'
import TabContent from './TabContent'
import { reviewContent, reviewComplete } from '../../dummy/review'
import { ratingStarReview } from '../../utils/star'
const MyReviewSegment = () => {
  const reviewData = reviewContent
  const reviewDataComplete = reviewComplete
  const [tab, setTab] = useState(0)
  const [reviewCount, setReviewCount] = useState(0)
  return (
    <>
      <Header />
      <TabList
        cls={cls}
        tab={tab}
        setTab={setTab}
        reviewCount={reviewCount}
        setReviewCount={setReviewCount}
      />
      <TabContent
        tab={tab}
        reviewData={reviewData}
        reviewDataComplete={reviewDataComplete}
        ratingStarReview={ratingStarReview}
      />
    </>
  )
}

export default MyReviewSegment
