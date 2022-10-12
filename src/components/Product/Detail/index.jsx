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
import Loading from '../../layout/Loading'
import ErrorCom from '../../common/ErrorCom'
import { useDispatch } from 'react-redux'
import GoTop from '../../common/GoTop'

const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const { data: list, isLoading, isError } = useGetProductQuery(params.id)

  return (
    <>
      {isLoading ? (
        <Loading />
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
            <GoTop />
          </div>
        )
      )}
    </>
  )
}

export default Detail
