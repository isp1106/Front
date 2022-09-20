import React from 'react'

const FastionTab = ({ openWomenTab, getTabData }) => {
  return (
    <ul className="flex w-full  h-12  sticky top-0 z-10 ">
      <li
        className={
          'w-2/4 text-center text-xs font-bold uppercase px-5 py-3  block leading-normal border-r-2 border-b-2 border-primary  box-border ' +
          (openWomenTab ? 'text-white bg-primary' : 'text-primary bg-white')
        }
        onClick={() => {
          getTabData(true)
        }}
      >
        WOMEN
      </li>
      <li
        className={
          'w-2/4 text-center text-xs font-bold uppercase px-5 py-3  block leading-normal border-b-2 border-primary ' +
          (!openWomenTab ? 'text-white bg-primary' : 'text-primary bg-white')
        }
        onClick={() => {
          getTabData(false)
        }}
      >
        men
      </li>
    </ul>
  )
}

export default FastionTab
