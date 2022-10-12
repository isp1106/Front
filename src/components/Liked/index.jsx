import React from 'react'
import { useLocation } from 'react-router-dom'
import Category from './Category'
import Container from './Container'
import RecentView from './RecentView'

export const Liked = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div>
      <Category />
      {pathname === '/recent-view' ? <RecentView /> : <Container />}
    </div>
  )
}

export default Liked
