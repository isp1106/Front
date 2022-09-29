import React, { useState } from 'react'
import { cls } from '../../utils'
import MemberInfo from './MemberInfo'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'

const ShippingInfo = () => {
  const [open, setOpen] = useState(false)
  const toggleBtn = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <div onClick={toggleBtn} className="border-b border-black-200 py-5">
        <div className="flex items-center">
          <h3 className="px-5 flex-grow font-bold">배송정보</h3>
          <GoBackIcon
            width="14px"
            height="14px"
            className={cls('mr-5', open ? 'rotate-90' : '-rotate-90')}
          />
        </div>
        {open && <MemberInfo />}
      </div>
    </>
  )
}

export default ShippingInfo
