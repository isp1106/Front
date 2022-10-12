import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../store/api/productSlice'
import MainSlide from './MainSlide'
import Explanation from './Explanation'
import DetailDesc from './DetailDesc'
import Relation from './Magazine'
import SubContent from './SubContent'
import DetailBtn from './DetailBtn'
import Brand from './Brand'
import { cls } from '../../../utils'
import BackIcon from '../../common/BackIcon'
import Loader from '../../layout/Loader'
import ErrorCom from '../../common/ErrorCom'
import { useDispatch } from 'react-redux'

const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { data: list, isLoading, isError } = useGetProductQuery(params.id)
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 2000) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorCom Title="에러 발생" />
      ) : (
        list && (
          <div className="relative mb-10">
            <MainSlide list={list.detailThumbList} />
            <Explanation list={list} />
            <Brand list={list} />
            <DetailDesc list={list.detailList} />
            <div className="w-full h-[10px] bg-white-200 my-8"></div>
            <Relation />
            <div className="w-full h-[10px] bg-white-200 my-8"></div>
            <SubContent />
            <DetailBtn />
            <div
              className={cls(
                'flex items-center justify-center fixed  right-3 text-white bottom-[120px] z-10 w-[38px] h-[38px] rounded-full bg-point font-bold transition-opacity ease-in',
                showButton ? 'opacity-1' : 'opacity-0',
              )}
              onClick={scrollToTop}
            >
              <BackIcon className="rotate-90" size="20px" fill="#fff" />
            </div>
          </div>
        )
      )}
    </>
  )
}

export default Detail
