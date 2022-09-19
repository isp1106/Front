import React from 'react'
import { Link, Element } from 'react-scroll'
import { CATEGORY } from './constants'

const Category = () => {
  return (
    <div>
      <nav className="flex ">
        <ul className="flex w-14 flex-col border-2 border-slate-700">
          {CATEGORY.map(({ TopCategory }) => {
            return (
              <li key={TopCategory}>
                <Link
                  activeClass="active"
                  className=""
                  to={TopCategory}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {TopCategory}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="grow">
          {CATEGORY.map(({ TopCategory, subCategory }, index) => {
            return (
              <div key={(index, TopCategory)}>
                {TopCategory === '패션' && (
                  <Element
                    name={TopCategory}
                    className="border-2 border-slate-700 h-full "
                  >
                    <h3 className="text-red-500">{TopCategory}</h3>
                    {subCategory.map(({ name, obj }, index) => {
                      return (
                        <div key={index}>
                          <h4 className="text-blue-500">{name}</h4>
                          <div className="grid grid-cols-3 ">
                            {obj.women.map((w, index) => (
                              <div key={index} className="w-16">
                                <img
                                  src={w.imgSrc}
                                  alt={w.subCategoryName}
                                  className="h-16 w-full rounded-2xl"
                                />
                                <h5 className="text-center w-full">
                                  {w.subCategoryName}
                                </h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </Element>
                )}
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Category
