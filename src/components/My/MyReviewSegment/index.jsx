import React from 'react'
import { useState } from 'react'
import { cls } from '../../../utils'
import Header from './Header'
import TabList from './TabList'
import TabContent from './TabContent'
import { reviewContent, reviewComplete } from '../../../dummy/review'
import { ratingStarReview } from '../../../utils/star'
const MyReviewSegment = () => {
  const [reviewAddChk, setReviewAddChk] = useState(false)
  const reviewData = reviewContent
  const reviewDataComplete = reviewComplete
  const [tab, setTab] = useState(0)
  const [reviewCount, setReviewCount] = useState(0)
  const [reviewCompleteCount, setReviewCompleteCount] = useState(0)
  return (
    <>
      <Header reviewAddChk={reviewAddChk} />
      <TabList
        cls={cls}
        tab={tab}
        setTab={setTab}
        reviewCount={reviewCount}
        setReviewCount={setReviewCount}
        reviewData={reviewData}
        reviewDataComplete={reviewDataComplete}
        reviewCompleteCount={reviewCompleteCount}
        setReviewCompleteCount={setReviewCompleteCount}
        reviewAddChk={reviewAddChk}
      />
      <TabContent
        tab={tab}
        reviewData={reviewData}
        reviewDataComplete={reviewDataComplete}
        ratingStarReview={ratingStarReview}
        reviewAddChk={reviewAddChk}
        setReviewAddChk={setReviewAddChk}
      />
    </>
  )
}

export default MyReviewSegment
