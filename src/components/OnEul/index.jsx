import React, { useState } from 'react'
import Header from '../layout/Header'
import Picture from './Picture'
import Category from './Category'
const OnEul = () => {
  return (
    <>
      <Header />
      <div className="mt-[54px]">
        <Picture />
        <Category />
      </div>
    </>
  )
}

export default OnEul
