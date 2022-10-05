import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/My/MyReview/Header'
const MyReview = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default MyReview
