import React from 'react'
import MainSlide from './MainSlide'
import Explanation from './Explanation'
import DetailDesc from './DetailDesc'
import Relation from './Magazine'
import SubContent from './SubContent'
import DetailBtn from './DetailBtn'
import Brand from './Brand'
import { detailProducts as list } from '../../../dummy/detail'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import productSlice from '../../../store/slices/productSlice'
import { setProduct } from '../../../store/slices/productSlice'
const Detail = () => {
  const { id, brand, thumnail, price, sale, productName } = list
  const dispatch = useDispatch()
  //rtk처리 시 변경

  useEffect(() => {
    dispatch(setProduct({ id, brand, thumnail, price, sale, productName }))
  }, [])
  return (
    <>
      <MainSlide />
      <Explanation />
      <Brand />
      <DetailDesc />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <Relation />
      <div className="w-full h-[10px] bg-white-200 my-8"></div>
      <SubContent />
      <DetailBtn />
    </>
  )
}

export default Detail
