import React, { useState } from 'react'
import { cls } from '../../../utils'
import { ReactComponent as Nochecked } from '/public/assets/allNotCheck.svg'
import { ReactComponent as Checked } from '/public/assets/allCheck.svg'

const Type = ({ types, userValue, onChangeCheckedHandler }) => {
  return (
    <>
      <div className="mb-5">
        <h3 className="font-bold my-5 ">구매관련 문의</h3>
        <div className="grid grid-cols-2 gap-5 pt-5 border-t border-black-200 text-sm">
          {types.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx < 8 && (
                <div
                  onClick={() => onChangeCheckedHandler(idx)}
                  className="flex items-center gap-4"
                >
                  {userValue.type === types[idx] ? <Checked /> : <Nochecked />}
                  <span
                    className={cls(
                      'text-sm text-black-600',
                      userValue.type === types[idx] && 'text-primary',
                    )}
                  >
                    {item}
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <h3 className="font-bold pt-5 border-t border-black-200 ">
          일반상담 문의
        </h3>
        <div className="grid grid-cols-2 gap-5 pt-5 text-sm">
          {types.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 7 && (
                <div
                  onClick={() => onChangeCheckedHandler(idx)}
                  className="flex items-center gap-4"
                >
                  {userValue.type === types[idx] ? <Checked /> : <Nochecked />}
                  <span
                    className={cls(
                      'text-sm text-black-600',
                      userValue.type === types[idx] && 'text-primary',
                    )}
                  >
                    {item}
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default Type
