import React from 'react'
import { Link, Element } from 'react-scroll'
import { CATEGORY } from './constants'

const Category = () => {
  return (
    <div>
      <nav className="flex">
        <ul className="flex w-14 flex-col border-2 border-slate-700">
          {CATEGORY.map((element, index) => {
            console.log(element)
            return (
              <li key={index}>
                <Link
                  activeClass="active"
                  className=""
                  to={element.TopCategory}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {element.TopCategory}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="grow">
          {CATEGORY.map(({ TopCategory, subCategory }, index) => {
            return (
              <Element
                name={TopCategory}
                className="border-2 border-slate-700 h-96  "
              >
                <h3 className="text-red-500">{TopCategory}</h3>
                {subCategory.map(({ name, list, obj, index }) => {
                  console.log('obj', name, obj.women)
                  console.log('list', name, list)
                  return (
                    <div key={(index, name)}>
                      <h4>{name}</h4>
                      {obj ? obj.women : list}
                    </div>
                  )
                })}
              </Element>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Category
