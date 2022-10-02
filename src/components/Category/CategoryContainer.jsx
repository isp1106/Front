import React from 'react'
import { useState } from 'react'
import CategoryList from './CategoryList'
import Container from './Container'
import Capsule from './Capsule'

function CategoryContainer() {
  const [gender, setGender] = useState('women')
  return (
    <div>
      <CategoryList />
      <Container />
      <Capsule gender={gender} setGender={setGender} />
    </div>
  )
}

export default CategoryContainer
