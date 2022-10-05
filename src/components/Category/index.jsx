import React from 'react'
import CategoryList from './CategoryList'
import Container from './Container'
import Capsule from './Capsule'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

function CategoryFashion() {
  const { topCG, subCG } = useParams()

  return (
    <div>
      <CategoryList topCG={topCG} subCG={subCG} />
      <Container />
      <Capsule />
    </div>
  )
}

export default CategoryFashion
