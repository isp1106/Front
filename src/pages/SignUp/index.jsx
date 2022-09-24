import React from 'react'
import GoBack from '../../components/common/GoBack'
import { Outlet } from 'react-router-dom'
import TermService from './TermService'
const SignUp = () => {
  return (
    <div>
      <GoBack />
      <div className="px-5 pt-32 pb-12">
        <Outlet />
      </div>
    </div>
  )
}

export default SignUp
