import React, { useState } from 'react'
import { cls } from '../../utils'
import TodayLank from './TodayLank'
import NewStyle from './NewStyle'
const list = ['인기', '최신', '팔로잉']

const Category = () => {
  const [select, setSelect] = useState(list[0])
  const changeCategory = (item) => {
    setSelect(item)
  }
  return (
    <>
      <div className="bg-primary pl-5 ">
        <ul className="flex gap-3 py-3 text-xl">
          {list.map((item, index) => (
            <li
              key={index}
              onClick={() => changeCategory(item)}
              className={cls(
                select === item
                  ? 'text-white font-bold'
                  : 'text-white-200 font-normal',
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <TodayLank category={select} />
      <NewStyle category={select} />
    </>
  )
}

export default Category
