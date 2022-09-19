import React from 'react'
import GoBack from '../../components/common/GoBack'
import { Outlet } from 'react-router-dom'
import TermService from './TermService'
const SignUp = () => {
  return (
    <div>
      <GoBack />
      <div className="pl-5 pr-5">
        <Outlet />
      </div>
    </div>
  )
}

export default SignUp
