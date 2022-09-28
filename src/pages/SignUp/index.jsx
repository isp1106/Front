import React from 'react'
import GoBack from '../../components/common/GoBack'
import { Outlet } from 'react-router-dom'
const SignUp = () => {
  return (
    <div>
      <GoBack />
      <div className="px-5 pt-[66px] pb-12">
        <Outlet />
      </div>
    </div>
  )
}

export default SignUp
