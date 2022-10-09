import React from 'react'
import Header from '../../components/layout/Header'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
      <Header />
      <div className="mt-[64px]">
        <Outlet />
      </div>
    </>
  )
}

export default index
