import React from 'react'
import CategoryHeader from './CategoryHeader'
import { Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <nav className="-mt-1.5">
      <CategoryHeader />
      <Outlet />
    </nav>
  )
}

export default Category
