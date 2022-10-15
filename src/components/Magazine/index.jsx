import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import Main from './Main'
import GoTop from '../common/GoTop'

const Magazine = () => {
  return (
    <>
      <Header />
      <div className="pt-[54px] pb-[66px]">
        <Main />
      </div>
      <GoTop />
    </>
  )
}

export default Magazine
