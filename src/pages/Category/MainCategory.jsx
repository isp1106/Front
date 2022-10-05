import React, { useState } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { CATEGORY } from '../../dummy/constantsfix'
import { cls } from '../../utils'
import GenderTab from './GenderTab'
import CategoryItem from './CategoryItem'
import './Category.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MainCategory() {
  const [topCategory, setTopCategory] = useState('패션')
  const [beautyBrand, setBeautyBrand] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    CATEGORY.map(({ TopCategory, subCategory }) => {
      if (TopCategory === '뷰티') {
        setBeautyBrand(subCategory[0].list)
      }
    })
  }, [])

  return (
    <div>
      <div
        className={cls(
          'w-full max-w-[600px] h-[calc(100vh-4rem)] pt-20 grid grid-cols-[110px_minmax(0,_1fr)] border-t-2 border-primary',
          topCategory === '뷰티' && 'fixed grid-rows-[10rem,_1fr]',
        )}
      >
        {topCategory === '뷰티' && (
          <div className="col-span-2">
            <h5 className="block px-5 pt-2.5 pb-4 font-bold">브랜드</h5>
            <div className="px-5 flex overflow-x-auto">
              {beautyBrand.map(({ subCategoryName, imgSrc }) => (
                <div
                  className="mr-3.5 last:mr-0"
                  key={imgSrc}
                  onClick={() => console.log(subCategoryName)}
                >
                  <div className="h-16 w-16 mb-2 rounded-full overflow-hidden bg-cover bg-white flex justify-center items-center">
                    <img src={imgSrc} alt={subCategoryName} />
                  </div>
                  <div className="text-xs text-black-800 text-center w-full">
                    {subCategoryName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="overflow-hidden">
          <ul>
            {CATEGORY.map(({ TopCategory }) => {
              return (
                <li className="h-12" key={TopCategory}>
                  <ScrollLink
                    activeClass="active"
                    className={cls(
                      'px-5 py-3 flex items-center w-full h-full border-box text-black-600 ',
                      topCategory === TopCategory &&
                        'font-bold text-primary border-y-2 border-primary',

                      TopCategory === '패션' && 'border-t-2 border-primary',
                    )}
                    to={TopCategory}
                    spy={true}
                    smooth={true}
                    duration={500}
                    containerId="containerElement"
                    onClick={() => {
                      setTopCategory(TopCategory)
                    }}
                  >
                    <div>{TopCategory}</div>
                  </ScrollLink>
                </li>
              )
            })}
          </ul>
        </div>
        <Element
          className="overflow-scroll border-t-2 border-primary"
          id="containerElement"
        >
          <div>
            {CATEGORY.map(({ TopCategory, subCategory }, index) => {
              return (
                <div key={subCategory[0].name}>
                  {TopCategory === '패션' && (
                    <Element
                      name={TopCategory}
                      className="box-border border-l-2 border-primary h-full bg-[#f3f3f3]"
                    >
                      <GenderTab />
                      <h3 className="text-sm h-12 font-bold uppercase px-5 py-3 block border-y border-black">
                        {TopCategory}
                      </h3>
                      <div className="grid grid-cols-3 place-items-center px-3 py-5">
                        {subCategory.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                navigate(`${TopCategory}/${item.name}`)
                              }}
                            >
                              <CategoryItem item={item} />
                            </div>
                          )
                        })}
                      </div>
                    </Element>
                  )}
                  {TopCategory === '뷰티' && (
                    <Element
                      name={TopCategory}
                      className="box-border border-l-2 border-primary h-full bg-[#f3f3f3]"
                    >
                      <h3 className="text-sm h-12 font-bold uppercase px-5 py-3 block border-y border-black sticky top-0 bg-white z-10">
                        {TopCategory}
                      </h3>
                      <div className="grid grid-cols-3 place-items-center px-3 py-5">
                        {subCategory.slice(1).map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                navigate(`${TopCategory}/${item.name}`)
                              }}
                            >
                              <CategoryItem item={item} />
                            </div>
                          )
                        })}
                      </div>
                    </Element>
                  )}

                  {TopCategory !== '패션' && TopCategory !== '뷰티' && (
                    <Element
                      name={TopCategory}
                      className={
                        'box-border border-l-2 border-primary h-full bg-[#f3f3f3]'
                      }
                    >
                      <h3 className="text-sm h-12 font-bold uppercase px-5 py-3 block border-y border-black sticky top-0 bg-white z-10">
                        {TopCategory}
                      </h3>
                      <div className="grid grid-cols-3 place-items-center px-3 py-5">
                        {subCategory.map((item, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                navigate(`${TopCategory}/${item.name}`)
                              }}
                            >
                              <CategoryItem item={item} />
                            </div>
                          )
                        })}
                      </div>
                    </Element>
                  )}
                </div>
              )
            })}
          </div>
        </Element>
      </div>
    </div>
  )
}

export default MainCategory
