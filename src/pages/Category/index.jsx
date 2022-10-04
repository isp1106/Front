import React, { useState } from 'react'
import { Link as ScrollLink, Element } from 'react-scroll'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import CategoryItem from './CategoryItem'
import { CATEGORY } from '../../dummy/constantsfix'
import FastionTab from './FastionTab'
import { ReactComponent as SearchIcon } from '/public/assets/search_icon.svg'
import { ReactComponent as CartIcon } from '/public/assets/bag.svg'

import './Category.css'

const Category = () => {
  const [openWomenTab, setOpenWemenTab] = useState(true)
  const [category, setCategory] = useState('')
  const getTabData = (isWomenTab) => {
    setOpenWemenTab(isWomenTab)
  }
  return (
    <div>
      <nav className="grid grid-cols-3 h-full place-items-stretch  ">
        <div className="col-span-3 m-1">
          <div className="flex justify-center">
            <div className="flex p-2 mx-4 w-64 border-b-2 border-primary justify-end">
              <input
                type="text"
                className="grow placeholder:text-primary"
                placeholder="#어라운드 앤"
              />
              <SearchIcon className="w-6" />
            </div>
            <Link to="/cart" className="p-2  ">
              <CartIcon className="w-8" onClick={() => navigate('/cart')} />
            </Link>
          </div>
        </div>
        {true && <div className="col-span-3">brand kdkdkdkddkkd</div>}
        <div className="col-span-3 grid grid-cols-3 ">
          <div className="border-t-2 border-primary h-screen">
            <ul className="flex w-28 flex-col fixed">
              {CATEGORY.map(({ TopCategory }) => {
                return (
                  <li className=" h-12" key={TopCategory}>
                    <ScrollLink
                      activeClass="active"
                      className="text-xs font-bold px-5 py-3 block w-full h-full "
                      to={TopCategory}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => {
                        setCategory(TopCategory)
                      }}
                    >
                      {TopCategory}
                    </ScrollLink>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="col-span-2">
            <div className="">
              {CATEGORY.map(({ TopCategory, subCategory }, index) => {
                return (
                  <div key={(index, TopCategory)}>
                    {TopCategory === '패션' && (
                      <Element
                        name={TopCategory}
                        className="box-border border-x-2 border-primary h-full bg-[#f3f3f3] "
                      >
                        <FastionTab
                          openWomenTab={openWomenTab}
                          getTabData={getTabData}
                        />
                        <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary ">
                          {TopCategory}
                        </h3>
                        <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                          {subCategory.map((item, index) => {
                            return (
                              <div key={index}>
                                <div>
                                  <CategoryItem key={index} item={item} />
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </Element>
                    )}
                    {TopCategory == '뷰티' && (
                      <Element
                        name={TopCategory}
                        className="border-x-2 border-primary h-full bg-[#f3f3f3] "
                      >
                        <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-0  bg-white z-10 ">
                          {TopCategory}
                        </h3>
                        <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                          {subCategory.slice(1).map((item, index) => {
                            return (
                              <div key={index}>
                                <div>
                                  <CategoryItem key={index} item={item} />
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* {subCategory.slice(1).map(({ name, list }, index) => {
                          return (
                            <div key={index}>
                              <h4 className=" h-12  text-sm font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-12 bg-white">
                                {name}
                              </h4>
                              <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                                {list.map((item, index) => (
                                  <CategoryItem key={index} item={item} />
                                ))}
                              </div>
                            </div>
                          )
                        })} */}
                      </Element>
                    )}
                    {TopCategory !== '패션' && TopCategory !== '뷰티' && (
                      <Element
                        name={TopCategory}
                        className="border-x-2 border-primary h-full bg-[#f3f3f3] "
                      >
                        <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-0  bg-white z-10 ">
                          {TopCategory}
                        </h3>
                        {subCategory.map(({ name, list }, index) => {
                          return (
                            <div key={index}>
                              <h4 className=" h-12  text-sm font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-12 bg-white">
                                {name}
                              </h4>
                              <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                                {list.map((item, index) => (
                                  <CategoryItem key={index} item={item} />
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
          </div>
        </div>
      </nav>
      {/* <nav className="border-t-2 border-primary flex flex-col ">
        {category === '뷰티' && (
          <div className="">
            <h5 className="block p-5 text-sm font-bold">브랜드</h5>
            <div className="px-5">
              {CATEGORY.map(({ TopCategory, subCategory }, index) => {
                return (
                  <div key={index}>
                    {TopCategory === '뷰티' && (
                      <div className="flex">
                        {subCategory[0].list.map(
                          ({ subCategoryName, imgSrc }) => {
                            console.log(
                              'subCategoryName',
                              subCategoryName,
                              imgSrc,
                            )
                            return (
                              <div className="p-2">
                                <img
                                  src={imgSrc}
                                  alt={subCategoryName}
                                  className="h-16 w-16 rounded-full flex justify-center items-center bg-white"
                                />
                                <h5 className="text-center w-full">
                                  {subCategoryName}
                                </h5>
                              </div>
                            )
                          },
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}
        <div className="flex ">
          <ul className="flex w-28 flex-col fixed">
            {CATEGORY.map(({ TopCategory }) => {
              return (
                <li className=" h-12" key={TopCategory}>
                  <Link
                    activeClass="active"
                    className="text-xs font-bold px-5 py-3 block w-full h-full "
                    to={TopCategory}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setCategory(TopCategory)
                    }}
                  >
                    {TopCategory}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="w-28"></div>
          <div className="grow h-full">
            {CATEGORY.map(({ TopCategory, subCategory }, index) => {
              return (
                <div key={(index, TopCategory)}>
                  {TopCategory === '패션' && (
                    <Element
                      name={TopCategory}
                      className="box-border border-x-2 border-primary h-full bg-[#f3f3f3] "
                    >
                      <FastionTab
                        openWomenTab={openWomenTab}
                        getTabData={getTabData}
                      />
                      <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary ">
                        {TopCategory}
                      </h3>
                      {subCategory.map(({ name, obj }, index) => {
                        return (
                          <div key={index}>
                            <h4 className=" h-12 text-sm font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-12 bg-white">
                              {name}
                            </h4>
                            <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                              {openWomenTab
                                ? obj.women.map((item, index) => (
                                    <CategoryItem key={index} item={item} />
                                  ))
                                : obj.men.map((item, index) => (
                                    <CategoryItem key={index} item={item} />
                                  ))}
                            </div>
                          </div>
                        )
                      })}
                    </Element>
                  )}
                  {TopCategory == '뷰티' && (
                    <Element
                      name={TopCategory}
                      className="border-x-2 border-primary h-full bg-[#f3f3f3] "
                    >
                      <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-0  bg-white z-10 ">
                        {TopCategory}
                      </h3>

                      {subCategory.slice(1).map(({ name, list }, index) => {
                        return (
                          <div key={index}>
                            <h4 className=" h-12  text-sm font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-12 bg-white">
                              {name}
                            </h4>
                            <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                              {list.map((item, index) => (
                                <CategoryItem key={index} item={item} />
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </Element>
                  )}
                  {TopCategory !== '패션' && TopCategory !== '뷰티' && (
                    <Element
                      name={TopCategory}
                      className="border-x-2 border-primary h-full bg-[#f3f3f3] "
                    >
                      <h3 className="text-sm  h-12  font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-0  bg-white z-10 ">
                        {TopCategory}
                      </h3>
                      {subCategory.map(({ name, list }, index) => {
                        return (
                          <div key={index}>
                            <h4 className=" h-12  text-sm font-bold uppercase text-primary px-5 py-3 block border-b-2  border-primary sticky top-12 bg-white">
                              {name}
                            </h4>
                            <div className="grid grid-cols-3 place-items-center border-b-2  border-primary">
                              {list.map((item, index) => (
                                <CategoryItem key={index} item={item} />
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
        </div>
      </nav> */}
    </div>
  )
}

export default Category
